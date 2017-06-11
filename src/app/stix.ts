import * as uuid from 'uuid';
import * as tv4 from 'tv4';
declare var require:any;

export module Stix {

  export const sroTypes:string[] = ["relationship", "sighting"];
  export const sdoTypes:string[] = ["attack-pattern", "campaign", "course-of-action", "identity", "indicator", "intrusion-set", "malware", "observed-data", "report", "threat-actor", "tool", "vulnerability"];
  export const schemas:any = {
    "common": require("./schemas/common"),
    "sdos": require("./schemas/sdos"),
    "sros": require("./schemas/sros")
  }

  export class Bundle {
    objects: Stix.Object[];
    id:string;
    type:string = "bundle";

    constructor() {
      this.id = "bundle--" + uuid.v4()
      this.objects = [];
    }
  }

  export class Object {

    type:string;
    id:string;
    version:Number;
    created:Date;
    modified:Date;

    constructor(stixType:string, properties:any) {
      let now = new Date().toISOString();

      this.type = stixType;
      this.id = properties.id || this.generateId(stixType);
      this.created = properties.created || now;
      this.modified = properties.modified || now;

      for (var key in properties) {
        this[key] = properties[key];
      }
    }

    generateId(stixType:string):string {
      return stixType + "--" + uuid.v4();
    }

    valid():tv4.SingleResult {
      return validate(JSON.parse(JSON.stringify(this)));
    }
  }

  export function validate(instance:Object):tv4.SingleResult {
    // Needs to look up the correct schema and validate it
    if(Stix.sroTypes.indexOf(instance.type) > -1) {
      return tv4.validateResult(instance, Stix.schemas.sros[instance.type]);
    } else if (Stix.sdoTypes.indexOf(instance.type) > -1) {
      return tv4.validateResult(instance, Stix.schemas.sdos[instance.type]);
    } else {
      return null;
    }
  }

  // Initializes tv4 by adding the schemas that we might need to reference from elsewhere
  export function initValidator():void {
    ["common", "sdos", "sros"].forEach(function(ns:string) {
      for(let key in Stix.schemas[ns]) {
        let id:string = "/stix/" + ns + "/" + key + ".json";
        Stix.schemas[ns][key]["$id"] = id;
        tv4.addSchema(id, Stix.schemas[ns][key]);
      }
    });
  }
}
