import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'raw-stix',
  templateUrl: './raw-stix.component.html',
  styleUrls: ['./raw-stix.component.css']
})
export class RawStixComponent implements OnInit {

  @Input()
  rawStix:String;

  constructor() { }

  ngOnInit() {

  }
}
