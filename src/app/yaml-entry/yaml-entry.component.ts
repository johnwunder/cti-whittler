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

  handleUserEntry(rawStix:String):void {
    // For now, just generate the actual STIX
    this.generateSTIX(rawStix);
  }

  private generateSTIX(from):void {
    var that = this;
    this.markers.forEach(function(marker) {
      that.editor.getEditor().getSession().removeMarker(marker);
    });
    this.markers = [];

    let objects = from.split(/\n( *\n)/);
    let line = 0;
    let count = 0;

    // Perform our initial processing to give everything an ID and default attributes
    let stixObjects = objects.map(function(item) {
      if(item.match(/^[ \n]+$/g) !== null) { line = line - 1};

      let newlinesRegex = item.match(/\n/g);
      let newlines = (newlinesRegex == null ? 0 : newlinesRegex.length);

      try {
        let parsedItem = jsyaml.safeLoad(item);

        if(parsedItem instanceof Object) {
          let stixType = Object.keys(parsedItem)[0];

          if(parsedItem[stixType] instanceof Object) {
            return new Stix.Object(stixType, parsedItem[stixType]);
          }
        }
      } catch(e) {
        console.log(e);
        return null;
      } finally {
        line = line + newlines + 1;
        count = count + 1;
      }
    }).filter(item => item !== null && item !== undefined);

    for(let obj of stixObjects) { this.resolveRelationships(obj, stixObjects); }

    // If we want to validate
    // for(let obj of stixObjects) {
    //   let result = obj.valid()
    //
    //   if(result == null) {
    //
    //   } else if (!result.valid) {
    //     let r = new aceRange(line, 0, line + 1, 100);
    //     that.markers.push(that.editor.getEditor().getSession().addMarker(r, "warning", "fullLine", false));
    //   }
    // }

    this.bundle.objects = stixObjects;

    this.stixChanged.emit(this.bundle);
  }

  private resolveRelationships(obj:Stix.Object, allObjs:Stix.Object[]):void {
    for (let prop of ['source_ref', 'target_ref', 'created_by_ref', 'sighting_of_ref', 'where_sighted_ref', 'translation_of_ref']) {
      if(typeof(obj[prop]) === "number" && allObjs[obj[prop]]) {
        obj[prop] = allObjs[obj[prop]].id;
      }
    }
  }
}
