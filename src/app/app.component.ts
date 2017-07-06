import { Component, ViewChild, ElementRef } from '@angular/core';
import { YamlEntryComponent } from './yaml-entry/yaml-entry.component';
import { RawStixComponent } from './raw-stix/raw-stix.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { Stix } from './stix';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rawStix:Stix.Bundle;
  @ViewChild('visualizer') visualizer:VisualizerComponent;
  help:ElementRef;

  constructor(help: ElementRef) {
    this.help = help;
  }

  stixChanged(stix:Stix.Bundle) {
    this.rawStix = stix;
    this.visualizer.visualize(stix);

    if(stix.objects && stix.objects.length > 0) {
      d3.select("#help-overlay").style("opacity", 1).transition().duration(500).style("opacity", 0).remove();
    }
  }
}
