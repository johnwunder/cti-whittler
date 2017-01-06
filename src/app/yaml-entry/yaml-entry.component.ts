import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Stix } from '../stix';
import * as jsyaml from 'js-yaml';

@Component({
  selector: 'yaml-entry',
  templateUrl: './yaml-entry.component.html',
  styleUrls: ['./yaml-entry.component.css']
})
export class YamlEntryComponent implements OnInit {

  @Output() stixChanged = new EventEmitter();
  bundle:Stix.Bundle;

  constructor() {
    this.bundle = new Stix.Bundle();
  }

  ngOnInit() {
    this.stixChanged.emit(this.bundle);
  }

  handleUserEntry(rawStix:String):void {
    // For now, just generate the actual STIX
    this.generateSTIX(rawStix);
  }

  private generateSTIX(from):void {
    let objects = from.split(/\n( *\n)+/);


    let stixObjects = objects.map(function(item) {
      try {
        let parsedItem = jsyaml.safeLoad(item);

        if(parsedItem instanceof Object) {
          let stixType = Object.keys(parsedItem)[0];

          if(parsedItem[stixType] instanceof Object) {
            return new Stix.Object(stixType, parsedItem[stixType]);
          }
        }
      } catch(e) {
        return null;
      }
    }).filter(item => item !== null && item !== undefined);

    for(let obj of stixObjects) { this.resolveRelationships(obj, stixObjects); }

    this.bundle.objects = stixObjects;

    this.stixChanged.emit(this.bundle);
  }

  private resolveRelationships(obj:Stix.Object, allObjs:Stix.Object[]):void {
    for (let prop of ['source_ref', 'target_ref', 'created_by_ref', 'sighting_of_ref', 'where_sighted_ref']) {
      if(typeof(obj[prop]) === "number" && allObjs[obj[prop]]) {
        obj[prop] = allObjs[obj[prop]].id;
      }
    }
  }
}
