import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
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
  bundle:Stix.Bundle;
  markers:any[] = [];

  constructor() {
    this.bundle = new Stix.Bundle();
  }

  ngOnInit() {
    this.stixChanged.emit(this.bundle);
    Stix.initValidator();

  }

  handleUserEntry(rawStix:string):void {
    // For now, just generate the actual STIX
    this.generateSTIX(rawStix);
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

  private generateSTIX(from:string):void {
    let objects = this.splitObjects(from);

    if(objects !== null && objects.length > 0) {
      this.bundle.objects = this.createStixObjects(objects);
      this.stixChanged.emit(this.bundle);
    }
  }

  private resolveRelationships(obj:Stix.Object, allObjs:Stix.Object[]):void {
    for (let prop of ['source_ref', 'target_ref', 'created_by_ref', 'sighting_of_ref', 'where_sighted_ref', 'translation_of_ref']) {
      if(typeof(obj[prop]) === "number" && allObjs[obj[prop]]) {
        obj[prop] = allObjs[obj[prop]].id;
      }
    }
  }
}
