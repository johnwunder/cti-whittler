import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Stix } from '.././stix';
declare var vizInit:Function;
declare var vizStix:Function;
declare var currentGraph:any;

@Component({
  selector: 'visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  @ViewChild('d3container') d3Container;
  rawStix:Stix.Bundle;
  initialized:boolean = false;

  constructor() { }

  ngOnInit() {
    vizInit(this.d3Container.nativeElement);
    this.initialized = true;
  }

  updateViz(stix:Stix.Bundle) {

  };

  runViz():void {
    // For now, just generate the actual STIX
    if(this.initialized) {
      vizStix(this.rawStix);
    }
  }
}
