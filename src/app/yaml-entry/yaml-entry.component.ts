import { Component, OnInit, Output, Input, EventEmitter, ViewChild, Optional } from '@angular/core';
import { Stix } from '../stix';

import * as jsyaml from 'js-yaml';
declare var ace:any;
let aceRange = ace.require('ace/range').Range;

@Component({
  selector: 'yaml-entry',
  templateUrl: './yaml-entry.component.html',
  styleUrls: ['./yaml-entry.component.css']
})

export class YamlEntryComponent implements OnInit {

  @ViewChild('editor') editor;

  @Output() stixChanged = new EventEmitter();
  @Input() readOnly:boolean;

  bundle:Stix.Bundle;
  settingText = false; // Super ugly but the only way to track whether the onChange event is real or fake is by setting this

  constructor() {
    this.bundle = new Stix.Bundle();
  }

  ngOnInit() {
    Stix.initValidator();
  }

  handleUserEntry(rawStix:string):void {
    if(this.settingText) { return }
    this.editor.text = rawStix;
    this.generateSTIX(rawStix);
    this.stixChanged.emit({bundle: this.bundle, text: this.editor.text, persist: true});
  }

  handleNewStix(rawStix:string):void {
    this.settingText = true;
    this.editor.text = rawStix;
    this.settingText = false;
    this.generateSTIX(rawStix);
    this.stixChanged.emit({bundle: this.bundle, text: this.editor.text, persist: false});
  }

  splitObjects(input:string):Array<string> {
    return input.split(/(?: *\n *\n)+/g).map((i) => i.trim());
  }

  createStixObjects(yamlStrings:Array<string>):Array<Stix.Object> {
    let stixObjects = yamlStrings.map((yaml, i) => {
      try {
        return this.createStixObject(yaml, this.bundle.objects[i]);
      } catch(e) {
        return null;
      }
    }).filter(item => item !== null && item !== undefined);

    for(let obj of stixObjects) { this.resolveRelationships(obj, stixObjects); }

    return stixObjects;
  }

  createStixObject(yaml:string, existingObject:Stix.Object):Stix.Object {
    let parsedItem = jsyaml.safeLoad(yaml);

    if(parsedItem instanceof Object) {
      let stixType = Object.keys(parsedItem)[0];

      if(parsedItem[stixType] instanceof Object) {
        let fields = parsedItem[stixType];

        if(existingObject && existingObject.type == stixType) {
          fields['id'] = existingObject.id;
        }
        return new Stix.Object(stixType, parsedItem[stixType]);
      }
    } else {
      return null;
    }
  }

  generateSTIX(from:string):void {
    let objects = this.splitObjects(from);

    if(objects !== null && objects.length > 0) {
      this.bundle.objects = this.createStixObjects(objects);
    }
  }

  private resolveRelationships(obj:any, allObjs:Stix.Object[]):void {
    for (let prop in obj) {
      if(prop.match(/_ref$/)) {
          obj[prop] = this.resolveRelationship(obj[prop], allObjs);
      } else if (prop.match(/_refs$/) && obj[prop].constructor === Array) {
        for(let i = 0; i < obj[prop].length; i++) {
          obj[prop][i] = this.resolveRelationship(obj[prop][i], allObjs);
        }
      } else if (typeof obj[prop] === "object") {
        this.resolveRelationships(obj[prop], allObjs);
      }
    }
  }

  private resolveRelationship(idref:any, allObjects:Stix.Object[]):string {
    if(typeof(idref) === "number" && allObjects[idref]) {
      return allObjects[idref].id;
    } else {
      let target = allObjects.find((o) => o['name'] === idref)
      if(target) {
        return target.id;
      } else {
        return idref;
      }
    }
  }
}
