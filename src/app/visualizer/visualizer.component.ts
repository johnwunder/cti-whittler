import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Stix } from '.././stix';
import * as d3 from 'd3';

@Component({
  selector: 'visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  rawStix:Stix.Bundle;
  @ViewChild('d3container') private d3Container: ElementRef;

  private margin:any = { top: 20, bottom: 20, left: 20, right: 20};
  private width:number;
  private height:number;
  private svg:any; // Really a native element

  constructor(container: ElementRef) { }

  ngOnInit() {
    this.createViz();
  }

  createViz() {
    let element = this.d3Container.nativeElement;

    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);
  }

  runViz():void {
    // For now, just generate the actual STIX

  }


}
