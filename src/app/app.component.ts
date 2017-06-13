import { Component, ViewChild } from '@angular/core';
import { YamlEntryComponent } from './yaml-entry/yaml-entry.component';
import { RawStixComponent } from './raw-stix/raw-stix.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { Stix } from './stix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rawStix:Stix.Bundle;
  @ViewChild('visualizer') visualizer:VisualizerComponent;

  stixChanged(stix:Stix.Bundle) {
    this.rawStix = stix;
    this.visualizer.rawStix = stix;
  }
}
