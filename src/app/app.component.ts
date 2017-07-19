import { Component, ViewChild, ElementRef, OnInit, Optional } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { YamlEntryComponent } from './yaml-entry/yaml-entry.component';
import { RawStixComponent } from './raw-stix/raw-stix.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Stix } from './stix';
import { v4 } from 'uuid';
import * as d3 from 'd3';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('visualizer') visualizer:VisualizerComponent;
  @ViewChild('yamlEntry') entryComponent:YamlEntryComponent;

  rawInput:string;
  rawStix:Stix.Bundle;

  readUUID:string;
  writeUUID:string;

  readOnly:boolean = true;
  initialLoad:boolean = true;

  constructor(
    private help:ElementRef,
    @Optional() private db:AngularFireDatabase,
    private route:ActivatedRoute,
    private router:Router,
    private location:Location
  ) {
    // pass
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.readUUID = params['readUUID'];
      this.writeUUID = params['writeUUID'];

      if(this.readUUID) {
        this.subscribe()
      }

      if(this.readUUID && !this.writeUUID) {
        this.readOnly = true;
      } else {
        this.readOnly = false;
      }
    });
  }

  stixChanged(data:any) {
    this.rawStix = data.bundle;
    this.rawInput = data.text;

    if(this.writeUUID) {
      if(this.initialLoad == false) {
        this.db.object("/whittles/" + this.readUUID).set({text: this.rawInput, 'write-uuid': this.writeUUID});
      } else {
        this.initialLoad = false;
      }
    }

    if(this.rawStix.objects && this.rawStix.objects.length > 0) {
      this.visualizer.visualize(this.rawStix);
      d3.select("#help-overlay").style("opacity", 1).transition().duration(500).style("opacity", 0).remove();
    }
  }

  subscribe() {
    this.db.object("/whittles/" + this.readUUID + '/text').subscribe(
      (value) => {
        this.rawInput = value['$value']

        if(this.initialLoad && this.rawInput.length > 0) {
          this.entryComponent.handleUserEntry(this.rawInput);
        }
      }
    )
  }

  share() {
    if(this.rawInput === undefined) {return};
    let r = v4();
    let w = v4();

    this.db.object("/whittles/" + r).set({text: this.rawInput, 'write-uuid': w});

    this.router.navigate(['/whittles/', r, 'write', w])
  }

  get readLink():string { return location.origin + location.pathname + this.location.prepareExternalUrl("whittles/" + this.readUUID) }
  get writeLink():string { return location.origin + location.pathname + this.location.prepareExternalUrl("whittles/" + this.readUUID + "/write/" + this.writeUUID) }
}
