import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AceEditorComponent } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { YamlEntryComponent } from './yaml-entry/yaml-entry.component';
import { RawStixComponent } from './raw-stix/raw-stix.component';

@NgModule({
  declarations: [
    AppComponent,
    YamlEntryComponent,
    RawStixComponent,
    AceEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
