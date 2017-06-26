import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { Stix } from '../stix';

import { YamlEntryComponent } from './yaml-entry.component';

describe('The YAML Entry component', () => {
  let comp:    YamlEntryComponent;
  let fixture: ComponentFixture<YamlEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlEntryComponent, AceEditorComponent ] // declare the test component
    }).compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlEntryComponent);

    comp = fixture.componentInstance; // YamlEntryComponent test instance
  });

  it('should split objects by spaces', () => {
    let singleObject = comp.splitObjects("campaign:\n  name: Shade of Palms");
    expect(singleObject.length).toEqual(1);

    let objects = comp.splitObjects("campaign:\n  name: Shade of Palms\n\ncampaign:\n  name: Aurora");
    expect(objects.length).toEqual(2);
    expect(objects[0]).toEqual("campaign:\n  name: Shade of Palms");
    expect(objects[1]).toEqual("campaign:\n  name: Aurora");

    let extraSpacesObjects = comp.splitObjects("campaign:\n  name: Shade of Palms\n\n\ncampaign:\n  name: Aurora")
    expect(extraSpacesObjects.length).toEqual(2);
  });

  it('should generate STIX objects', () => {
    let objects = comp.createStixObjects(["campaign:\n  name: Shade of Palms\n\n\n", "campaign:\n  name: Aurora"]);

    expect(objects.length).toEqual(2);
  });

  it('should generate a STIX object', () => {
    let object = comp.createStixObject("campaign:\n  name: Shade of Palms\n\n\n", undefined);

    expect(object.id).toBeTruthy();
    expect(object['name']).toEqual("Shade of Palms");

    let existingObject = comp.createStixObject("campaign:\n  name: Shade of Palms\n\n\n", new Stix.Object('campaign', {'id': "1234"}));
    expect(existingObject.id).toEqual("1234");
  });
});
