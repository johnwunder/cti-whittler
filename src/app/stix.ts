import * as uuid from 'uuid';

export module Stix {
  export class Bundle {
    objects: Stix.Object[];
    id:String;
    type:String = "bundle";

    constructor() {
      this.id = "bundle--" + uuid.v4()
      this.objects = [];
    }
  }

  export class Object {

    type:String;
    id:String;
    version:Number;
    created:Date;
    modified:Date;

    constructor(stixType:String, properties:any) {
      let now = new Date().toISOString();

      this.type = stixType;
      this.id = properties.id || this.generateId(stixType);
      this.version = properties.version || 1;
      this.created = properties.created || now;
      this.modified = properties.modified || now;

      for (var key in properties) {
        this[key] = properties[key];
      }
    }

    generateId(stixType:String):String {
      return stixType + "--" + uuid.v4();
    }
  }
}
