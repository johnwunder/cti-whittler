import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {RootComponent} from './root.component';

import { AceEditorComponent } from 'ng2-ace-editor';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { YamlEntryComponent } from './yaml-entry/yaml-entry.component';
import { RawStixComponent } from './raw-stix/raw-stix.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

var imports = [];

const appRoutes:Routes = [
  { path: 'whittles/:readUUID/write/:writeUUID', component: AppComponent },
  { path: 'whittles/:readUUID', component: AppComponent },
  { path: '', component: AppComponent }
]

// Only init the firebase portion if firebase is installed
if(environment['firebase']) {
  imports = [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
    AngularFireModule.initializeApp(environment['firebase']),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ]
} else {
  imports = [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
    RouterModule.forRoot(appRoutes)
  ]
}

@NgModule({
  declarations: [
    AppComponent,
    YamlEntryComponent,
    RawStixComponent,
    AceEditorComponent,
    VisualizerComponent,
    RootComponent
  ],
  imports: imports,
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
