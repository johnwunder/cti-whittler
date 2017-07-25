webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-panel {\n  position: absolute;\n  top: 100px;\n  right: 50%;\n  left: 0;\n  bottom: 15px;\n  margin: 0;\n  padding: 15px;\n}\n\n.viz-panel {\n  position: absolute;\n  top: 100px;\n  right: 0;\n  left: 50%;\n  bottom: 0;\n}\n\nyaml-entry {\n  height: 50%;\n  font-size: 12px;\n  position: absolute;\n  top: 0;\n  bottom: 50%;\n  left: 0;\n  right: 0;\n  border: 1px solid #eee;\n  border-bottom: 0;\n}\n\nraw-stix {\n  margin: 15px 0 0 0;\n  border: 1px solid #eee;\n  border-bottom: 0;\n  padding: 0 15px 15px 15px;\n  position: absolute;\n  top: 50%;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n  overflow-y: scroll;\n}\n\n#copy-json {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-family: 'Source Sans Pro';\n  font-size: 14px;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  font-family: 'Source Code Pro', monospace;\n  font-size: 36px;\n  font-weight: lighter;\n  float: left;\n  margin: 0;\n}\n\nh1 span {\n  font-size: 18px;\n  margin-left: 20px;\n  display: inline-block;\n  color: #ccc;\n  font-family: 'Source Sans Pro';\n}\n\n#help-overlay {\n  padding: 0 50px;\n  font-family: 'Source Sans Pro';\n  color: #999;\n  font-size: 16px;\n  z-index: 100;\n}\n\n#help-overlay h2 {\n  color: #aaa;\n  font-size: 24px;\n}\n\n.section:first-child {\n  float: right;\n  width: 400px;\n}\n\n.section:last-child {\n  float: left;\n  width: 200px;\n}\n\n.section .example {\n  white-space: pre-wrap;\n  font-family: 'Source Code Pro';\n}\n\n#visualizer, #help-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.links a {\n  display: block;\n  float: right;\n  clear: both;\n}\n\n.sharing-link {\n  float: right;\n  font-family: 'Source Sans Pro';\n  font-size: 14px;\n}\n\nbutton {\n  color: transparent;\n  background-color: transparent;\n  cursor: pointer;\n  border: 0;\n}\n\n.sharing-link button {\n  text-indent: -2000px;\n  overflow: hidden;\n  width: 48px;\n  height: 48px;\n  background-image: url(https://johnwunder.github.io/cti-whittler/icons/eye.png);\n  display: inline-block;\n  opacity: .6;\n}\n\n.sharing-link button:hover {\n  opacity: 1;\n}\n\n.sharing-link input {\n  margin-left: 25px;\n  width: 400px;\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-family: 'Source Sans Pro';\n  font-size: 14px;\n  padding: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>CTI Whittler<span>Craft hand-spun, artisanal cyber threat intelligence</span></h1>\n<div class=\"sharing-link\" *ngIf=\"hasDb()\">\n   <div class=\"links\" *ngIf=\"readUUID; else elseBlock\">\n     <a ngxClipboard [cbContent]=\"readLink\" href=\"#\" (click)=\"false\">Copy Read-Only Link</a>\n     <a ngxClipboard [cbContent]=\"writeLink\" href=\"#\" (click)=\"false\" *ngIf=\"writeUUID\">Copy Write Link</a>\n   </div>\n  <ng-template #elseBlock><button type=\"button\" (click)=\"share($event.target)\" href=\"#\">Share</button></ng-template>\n</div>\n<div class=\"text-panel\">\n  <yaml-entry #yamlEntry (stixChanged)=\"stixChanged($event)\" [readOnly]=\"readOnly\"></yaml-entry>\n  <raw-stix [rawStix]=\"rawStix\"></raw-stix>\n  <a id=\"copy-json\" ngxClipboard [cbContent]=\"rawStix | json\" href=\"#\" (click)=\"false\">Copy</a>\n</div>\n<div class=\"viz-panel\">\n  <div id=\"help-overlay\" *ngIf=\"!readUUID\">\n    <div class=\"section\">\n      <h2>Give it a shot!</h2>\n      <div class=\"example\">campaign:\n  name: Shade of Palms\n\nindicator:\n  name: Hash xyz\n  pattern: \"[file.hashes.MD5 = 'xyz']\"\n  kill_chain_phases:\n    -\n      kill_chain_name: lockheed-martin-cyber-kill-chain\n      phase_name: reconnaissance\n\nrelationship:\n  relationship_type: indicates\n  source_ref: 1\n  target_ref: Shade of Palms\n      </div>\n    </div>\n    <div class=\"section\">\n      <h2>Add objects&hellip;</h2>\n      Objects are each valid YAML, where the key is the type of object and the properties are under that key. Objects should be separated by a new line.\n      <h2>Link 'em together&hellip;</h2>\n      Relationships can be defined either with a 0-based index to the object or with the name of the object. Anything ending in _ref is considered a relationship.\n    </div>\n  </div>\n  <visualizer #visualizer></visualizer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yaml_entry_yaml_entry_component__ = __webpack_require__("../../../../../src/app/yaml-entry/yaml-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer_component__ = __webpack_require__("../../../../../src/app/visualizer/visualizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var AppComponent = (function () {
    function AppComponent(help, db, route, router, location) {
        this.help = help;
        this.db = db;
        this.route = route;
        this.router = router;
        this.location = location;
        this.readOnly = true;
        this.initialLoad = true;
        // pass
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.readUUID = params['readUUID'];
            _this.writeUUID = params['writeUUID'];
            if (_this.readUUID) {
                _this.subscribe();
            }
            if (_this.readUUID && !_this.writeUUID) {
                _this.readOnly = true;
            }
            else {
                _this.readOnly = false;
            }
        });
    };
    AppComponent.prototype.stixChanged = function (data) {
        this.rawStix = data.bundle;
        this.rawInput = data.text;
        if (this.writeUUID && data.persist) {
            this.db.object("/whittles/" + this.readUUID).set({ text: this.rawInput, 'write-uuid': this.writeUUID });
        }
        if (this.rawStix.objects && this.rawStix.objects.length > 0) {
            this.visualizer.visualize(this.rawStix);
            __WEBPACK_IMPORTED_MODULE_7_d3__["select"]("#help-overlay").style("opacity", 1).transition().duration(500).style("opacity", 0).remove();
        }
    };
    AppComponent.prototype.subscribe = function () {
        var _this = this;
        this.db.object("/whittles/" + this.readUUID + '/text').subscribe(function (value) {
            _this.rawInput = value['$value'];
            if (_this.initialLoad && _this.rawInput.length > 0) {
                _this.entryComponent.handleNewStix(_this.rawInput);
            }
        });
    };
    AppComponent.prototype.share = function () {
        if (this.rawInput === undefined) {
            return;
        }
        ;
        var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_uuid__["v4"])();
        var w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_uuid__["v4"])();
        this.db.object("/whittles/" + r).set({ text: this.rawInput, 'write-uuid': w });
        this.router.navigate(['/whittles/', r, 'write', w]);
    };
    AppComponent.prototype.hasDb = function () {
        return this.db !== undefined;
    };
    Object.defineProperty(AppComponent.prototype, "readLink", {
        get: function () { return location.origin + location.pathname + this.location.prepareExternalUrl("whittles/" + this.readUUID); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "writeLink", {
        get: function () { return location.origin + location.pathname + this.location.prepareExternalUrl("whittles/" + this.readUUID + "/write/" + this.writeUUID); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('visualizer'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer_component__["a" /* VisualizerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer_component__["a" /* VisualizerComponent */]) === "function" && _a || Object)
    ], AppComponent.prototype, "visualizer", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('yamlEntry'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__yaml_entry_yaml_entry_component__["a" /* YamlEntryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__yaml_entry_yaml_entry_component__["a" /* YamlEntryComponent */]) === "function" && _b || Object)
    ], AppComponent.prototype, "entryComponent", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* HashLocationStrategy */] }],
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Optional */])()),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _g || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_component__ = __webpack_require__("../../../../../src/app/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/ng2-ace-editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ace_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ace_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__yaml_entry_yaml_entry_component__ = __webpack_require__("../../../../../src/app/yaml-entry/yaml-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__raw_stix_raw_stix_component__ = __webpack_require__("../../../../../src/app/raw-stix/raw-stix.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__visualizer_visualizer_component__ = __webpack_require__("../../../../../src/app/visualizer/visualizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'whittles/:readUUID/write/:writeUUID', component: __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */] },
    { path: 'whittles/:readUUID', component: __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */] }
];
var imports = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_7_ngx_clipboard__["a" /* ClipboardModule */],
    __WEBPACK_IMPORTED_MODULE_6_ng2_ace_editor__["AceEditorModule"],
    __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
];
// Only init the firebase portion if firebase is installed
if (__WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */]['firebase']) {
    imports = imports.concat([
        __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */]['firebase']),
        __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabaseModule */]
    ]);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__yaml_entry_yaml_entry_component__["a" /* YamlEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__raw_stix_raw_stix_component__["a" /* RawStixComponent */],
                __WEBPACK_IMPORTED_MODULE_11__visualizer_visualizer_component__["a" /* VisualizerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__root_component__["a" /* RootComponent */]
            ],
            imports: imports,
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__root_component__["a" /* RootComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/raw-stix/raw-stix.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre#raw-stix {\n  font-family: \"Source Code Pro\", Monaco, Menlo, \"Ubuntu Mono\", Consolas, source-code-pro, monospace;\n  font-size: 12px;\n  white-space: pre-wrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/raw-stix/raw-stix.component.html":
/***/ (function(module, exports) {

module.exports = "<pre id=\"raw-stix\">{{rawStix | json}}</pre>\n"

/***/ }),

/***/ "../../../../../src/app/raw-stix/raw-stix.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RawStixComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RawStixComponent = (function () {
    function RawStixComponent() {
    }
    RawStixComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
        __metadata("design:type", Object)
    ], RawStixComponent.prototype, "rawStix", void 0);
    RawStixComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'raw-stix',
            template: __webpack_require__("../../../../../src/app/raw-stix/raw-stix.component.html"),
            styles: [__webpack_require__("../../../../../src/app/raw-stix/raw-stix.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RawStixComponent);
    return RawStixComponent;
}());

//# sourceMappingURL=raw-stix.component.js.map

/***/ }),

/***/ "../../../../../src/app/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'root',
            template: "<router-outlet></router-outlet>",
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());

//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ "../../../../../src/app/schemas/common/bundle.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "bundle",
	"description": "A Bundle is a collection of arbitrary STIX Objects and Marking Definitions grouped together in a single container.",
	"type": "object",
	"properties": {
		"type": {
			"type": "string",
			"description": "The type of this object, which MUST be the literal `bundle`.",
			"enum": [
				"bundle"
			]
		},
		"id": {
			"allOf": [
				{
					"$ref": "identifier.json",
					"description": "An identifier for this bundle. The id field for the Bundle is designed to help tools that may need it for processing, but tools are not required to store or track it. "
				},
				{
					"title": "id",
					"pattern": "^bundle--"
				}
			]
		},
		"spec_version": {
			"type": "string",
			"enum": [
				"2.0"
			],
			"description": "The version of the STIX specification used to represent the content in this bundle."
		},
		"objects": {
			"type": "array",
			"description": "Specifies a set of one or more STIX Objects.",
			"items": {
				"anyOf": [
					{
						"oneOf": [
							{
								"$ref": "../sdos/attack-pattern.json"
							},
							{
								"$ref": "../sdos/campaign.json"
							},
							{
								"$ref": "../sdos/course-of-action.json"
							},
							{
								"$ref": "../sdos/identity.json"
							},
							{
								"$ref": "../sdos/indicator.json"
							},
							{
								"$ref": "../sdos/intrusion-set.json"
							},
							{
								"$ref": "../sdos/malware.json"
							},
							{
								"$ref": "marking-definition.json"
							},
							{
								"$ref": "../sdos/observed-data.json"
							},
							{
								"$ref": "../sros/relationship.json"
							},
							{
								"$ref": "../sdos/report.json"
							},
							{
								"$ref": "../sros/sighting.json"
							},
							{
								"$ref": "../sdos/threat-actor.json"
							},
							{
								"$ref": "../sdos/tool.json"
							},
							{
								"$ref": "../sdos/vulnerability.json"
							}
						]
					},
					{
						"allOf": [
							{
								"$ref": "../common/core.json"
							},
							{
								"properties": {
									"type": {
										"type": "string",
										"description": "The type of this object, which for custom objects cannot be one of those defined in the specification.",
										"not": {
											"enum": [
												"attack-pattern",
												"campaign",
												"course-of-action",
												"identity",
												"indicator",
												"intrusion-set",
												"malware",
												"marking-definition",
												"observed-data",
												"relationship",
												"report",
												"sighting",
												"threat-actor",
												"tool",
												"vulnerability"
											]
										}
									}
								}
							}
						]
					}
				]
			},
			"minItems": 1
		}
	},
	"required": [
		"type",
		"id",
		"spec_version"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/core.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "core",
	"description": "Common properties and behavior across all STIX Domain Objects and STIX Relationship Objects.",
	"type": "object",
	"properties": {
		"type": {
			"title": "type",
			"type": "string",
			"pattern": "^\\-?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\\-?$",
			"minLength": 3,
			"maxLength": 250,
			"description": "The type property identifies the type of STIX Object (SDO, Relationship Object, etc). The value of the type field MUST be one of the types defined by a STIX Object (e.g., indicator).",
			"not": {
				"enum": [
					"incident",
					"infrastructure"
				]
			}
		},
		"id": {
			"$ref": "identifier.json",
			"description": "The id property universally and uniquely identifies this object."
		},
		"created_by_ref": {
			"$ref": "identifier.json",
			"description": "The ID of the Source object that describes who created this object."
		},
		"labels": {
			"type": "array",
			"description": "The labels property specifies a set of classifications.",
			"items": {
				"type": "string"
			},
			"minItems": 1
		},
		"created": {
			"$ref": "timestamp.json",
			"description": "The created property represents the time at which the first version of this object was created."
		},
		"modified": {
			"$ref": "timestamp.json",
			"description": "The modified property represents the time that this particular version of the object was created."
		},
		"revoked": {
			"type": "boolean",
			"description": "The revoked property indicates whether the object has been revoked."
		},
		"external_references": {
			"type": "array",
			"description": "A list of external references which refers to non-STIX information.",
			"items": {
				"$ref": "external-reference.json"
			},
			"minItems": 1
		},
		"object_marking_refs": {
			"type": "array",
			"description": "The list of marking-definition objects to be applied to this object.",
			"items": {
				"$ref": "identifier.json"
			},
			"minItems": 1
		},
		"granular_markings": {
			"type": "array",
			"description": "The set of granular markings that apply to this object.",
			"items": {
				"$ref": "granular-marking.json"
			},
			"minItems": 1
		}
	},
	"patternProperties": {
		"^[a-z0-9_]{3,250}$": {
			"anyOf": [
				{
					"type": "array",
					"minItems": 1
				},
				{
					"type": "string"
				},
				{
					"type": "integer"
				},
				{
					"type": "boolean"
				},
				{
					"type": "number"
				},
				{
					"type": "object"
				}
			]
		}
	},
	"additionalProperties": true,
	"not": {
		"anyOf": [
			{
				"required": [
					"confidence"
				]
			},
			{
				"required": [
					"severity"
				]
			},
			{
				"required": [
					"action"
				]
			},
			{
				"required": [
					"usernames"
				]
			},
			{
				"required": [
					"phone_numbers"
				]
			},
			{
				"required": [
					"addresses"
				]
			},
			{
				"required": [
					"first_seen_precision"
				]
			},
			{
				"required": [
					"last_seen_precision"
				]
			},
			{
				"required": [
					"valid_from_precision"
				]
			},
			{
				"required": [
					"valid_until_precision"
				]
			}
		]
	},
	"required": [
		"type",
		"id",
		"created",
		"modified"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/cyber-observable-core.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "core",
	"description": "Common properties and behavior across all Cyber Observable Objects.",
	"type": "object",
	"properties": {
		"type": {
			"type": "string",
			"pattern": "^\\-?[a-z0-9]+(-[a-z0-9]+)*\\-?$",
			"minLength": 3,
			"maxLength": 250,
			"description": "Indicates that this object is an Observable Object. The value of this property MUST be a valid Observable Object type name, but to allow for custom objects this has been removed from the schema.",
			"not": {
				"enum": [
					"action"
				]
			}
		},
		"description": {
			"type": "string",
			"description": "Specifies a textual description of the Object."
		},
		"extensions": {
			"$ref": "../common/dictionary.json",
			"description": "Specifies any extensions of the object, as a dictionary."
		}
	},
	"patternProperties": {
		"^[a-z0-9_]{3,250}$": {
			"anyOf": [
				{
					"type": "array",
					"minItems": 1
				},
				{
					"type": "string"
				},
				{
					"type": "integer"
				},
				{
					"type": "boolean"
				},
				{
					"type": "number"
				},
				{
					"type": "object"
				}
			]
		}
	},
	"additionalProperties": false,
	"not": {
		"anyOf": [
			{
				"required": [
					"action"
				]
			}
		]
	},
	"required": [
		"type"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/dictionary.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "dictionary",
	"description": "A dictionary captures a set of key/value pairs",
	"type": "object",
	"patternProperties": {
		"^[a-zA-Z0-9_-]{3,256}$": {
			"anyOf": [
				{
					"type": "array",
					"minItems": 1
				},
				{
					"type": "string"
				},
				{
					"type": "integer"
				},
				{
					"type": "boolean"
				},
				{
					"type": "number"
				},
				{
					"type": "object"
				}
			]
		}
	},
	"additionalProperties": false
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/external-reference.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "external-reference",
	"description": "External references are used to describe pointers to information represented outside of STIX.",
	"type": "object",
	"properties": {
		"description": {
			"type": "string",
			"description": "A human readable description"
		},
		"url": {
			"$ref": "url-regex.json",
			"description": "A URL reference to an external resource."
		}
	},
	"oneOf": [
		{
			"properties": {
				"source_name": {
					"type": "string",
					"description": "The source within which the external-reference is defined (system, registry, organization, etc.)",
					"pattern": "^cve$"
				},
				"external_id": {
					"type": "string",
					"description": "An identifier for the external reference content.",
					"pattern": "^CVE-\\d{4}-(0\\d{3}|[1-9]\\d{3,})$"
				}
			},
			"required": [
				"source_name",
				"external_id"
			]
		},
		{
			"properties": {
				"source_name": {
					"type": "string",
					"description": "The source within which the external-reference is defined (system, registry, organization, etc.)",
					"pattern": "^capec$"
				},
				"external_id": {
					"type": "string",
					"description": "An identifier for the external reference content.",
					"pattern": "^CAPEC-\\d+$"
				}
			},
			"required": [
				"source_name",
				"external_id"
			]
		},
		{
			"properties": {
				"source_name": {
					"type": "string",
					"description": "The source within which the external-reference is defined (system, registry, organization, etc.)",
					"not": {
						"pattern": "^(cve)|(capec)$"
					}
				},
				"external_id": {
					"type": "string",
					"description": "An identifier for the external reference content.",
					"not": {
						"pattern": "^(CVE-\\d{4}-(0\\d{3}|[1-9]\\d{3,}))|(CAPEC-\\d+)$"
					}
				}
			},
			"required": [
				"source_name"
			],
			"anyOf": [
				{
					"required": [
						"external_id"
					]
				},
				{
					"required": [
						"description"
					]
				},
				{
					"required": [
						"url"
					]
				}
			]
		}
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/granular-marking.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "granular-marking",
	"description": "The granular-marking type defines how the list of marking-definition objects referenced by the marking_refs property to apply to a set of content identified by the list of selectors in the selectors property.",
	"type": "object",
	"properties": {
		"selectors": {
			"type": "array",
			"description": "A list of selectors for content contained within the STIX object in which this property appears.",
			"items": {
				"type": "string",
				"pattern": "^[a-z0-9_-]{3,250}(\\.(\\[\\d+\\]|[a-z0-9_-]{1,250}))*$"
			},
			"minItems": 1
		},
		"marking_ref": {
			"$ref": "identifier.json",
			"pattern": "^marking-definition--",
			"description": "The marking_ref property specifies the ID of the marking-definition object that describes the marking."
		}
	},
	"required": [
		"selectors",
		"marking_ref"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/hashes-type.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "dictionary",
	"description": "A dictionary captures a set of key/value pairs",
	"type": "object",
	"patternProperties": {
		"^[a-zA-Z0-9_-]{1,}$": {
			"type": "string",
			"description": "Custom hash key"
		},
		"^MD5$": {
			"type": "string",
			"description": "Specifies the MD5 message digest algorithm.",
			"pattern": "^[a-fA-F0-9]{32}$"
		},
		"^MD6$": {
			"type": "string",
			"description": "Specifies the MD6 message digest algorithm.",
			"pattern": "^[a-fA-F0-9]{32}|[a-fA-F0-9]{40}|[a-fA-F0-9]{56}|[a-fA-F0-9]{64}|[a-fA-F0-9]{96}|[a-fA-F0-9]{128}$"
		},
		"^RIPEMD-160$": {
			"type": "string",
			"description": "Specifies the RIPEMD­-160 (R​ACE​ Integrity Primitives Evaluation Message Digest)​ cryptographic hash function.",
			"pattern": "^[a-fA-F0-9]{40}$"
		},
		"^SHA-1$": {
			"type": "string",
			"description": "Specifies the SHA­-1 (secure-­hash algorithm 1) cryptographic hash function.",
			"pattern": "^[a-fA-F0-9]{40}$"
		},
		"^SHA-224$": {
			"type": "string",
			"description": "Specifies the SHA-­224 cryptographic hash function (part of the SHA­2 family).",
			"pattern": "^[a-fA-F0-9]{56}$"
		},
		"^SHA-256$": {
			"type": "string",
			"description": "Specifies the SHA-­256 cryptographic hash function (part of the SHA­2 family).",
			"pattern": "^[a-fA-F0-9]{64}$"
		},
		"^SHA-384$": {
			"type": "string",
			"description": "Specifies the SHA-­384 cryptographic hash function (part of the SHA­2 family).",
			"pattern": "^[a-fA-F0-9]{96}$"
		},
		"^SHA-512$": {
			"type": "string",
			"description": "Specifies the SHA-­512 cryptographic hash function (part of the SHA­2 family).",
			"pattern": "^[a-fA-F0-9]{128}$"
		},
		"^SHA3-224$": {
			"type": "string",
			"description": "Specifies the SHA3-224 cryptographic hash function.",
			"pattern": "^[a-fA-F0-9]{56}$"
		},
		"^SHA3-256$": {
			"type": "string",
			"description": "Specifies the SHA3-256 cryptographic hash function.",
			"pattern": "^[a-fA-F0-9]{64}$"
		},
		"^SHA3-384$": {
			"type": "string",
			"description": "Specifies the SHA3-384 cryptographic hash function.",
			"pattern": "^[a-fA-F0-9]{96}$"
		},
		"^SHA3-512$": {
			"type": "string",
			"description": "Specifies the SHA3-512 cryptographic hash function.",
			"pattern": "^[a-fA-F0-9]{128}$"
		},
		"^ssdeep$": {
			"type": "string",
			"description": "Specifies the ssdeep fuzzy hashing algorithm.",
			"pattern": "^[a-zA-Z0-9/+:.]{1,128}$"
		},
		"^WHIRLPOOL$": {
			"type": "string",
			"description": "Specifies the whirlpool cryptographic hash function",
			"pattern": "^[a-fA-F0-9]{128}$"
		}
	},
	"additionalProperties": false
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/hex.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "hex",
	"description": "The hex data type encodes an array of octets (8-bit bytes) as hexadecimal. The string MUST consist of an even number of hexadecimal characters, which are the digits '0' through '9' and the letters 'a' through 'f'.  In order to allow pattern matching on custom objects, all properties that use the hex type, the property name MUST end with '_hex'.",
	"type": "string",
	"pattern": "^([a-fA-F0-9]{2})+$"
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/identifier.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "identifier",
	"description": "Represents identifiers across the CTI specifications. The format consists of the name of the top-level object being identified, followed by two dashes (--), followed by a UUIDv4.",
	"type": "string",
	"pattern": "^[a-z][a-z-]+[a-z]--[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/index.js":
/***/ (function(module, exports, __webpack_require__) {

exports["bundle"] = __webpack_require__("../../../../../src/app/schemas/common/bundle.json");
exports["core"] = __webpack_require__("../../../../../src/app/schemas/common/core.json");
exports["cyber-observable-core"] = __webpack_require__("../../../../../src/app/schemas/common/cyber-observable-core.json");
exports["dictionary"] = __webpack_require__("../../../../../src/app/schemas/common/dictionary.json");
exports["external-reference"] = __webpack_require__("../../../../../src/app/schemas/common/external-reference.json");
exports["granular-marking"] = __webpack_require__("../../../../../src/app/schemas/common/granular-marking.json");
exports["hashes-type"] = __webpack_require__("../../../../../src/app/schemas/common/hashes-type.json");
exports["hex"] = __webpack_require__("../../../../../src/app/schemas/common/hex.json");
exports["identifier"] = __webpack_require__("../../../../../src/app/schemas/common/identifier.json");
exports["kill-chain-phase"] = __webpack_require__("../../../../../src/app/schemas/common/kill-chain-phase.json");
exports["marking-definition"] = __webpack_require__("../../../../../src/app/schemas/common/marking-definition.json");
exports["timestamp"] = __webpack_require__("../../../../../src/app/schemas/common/timestamp.json");
exports["url-regex"] = __webpack_require__("../../../../../src/app/schemas/common/url-regex.json");


/***/ }),

/***/ "../../../../../src/app/schemas/common/kill-chain-phase.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "kill-chain-phase",
	"description": "The kill-chain-phase represents a phase in a kill chain.",
	"type": "object",
	"properties": {
		"kill_chain_name": {
			"type": "string",
			"description": "The name of the kill chain."
		},
		"phase_name": {
			"type": "string",
			"description": "The name of the phase in the kill chain."
		}
	},
	"required": [
		"kill_chain_name",
		"phase_name"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/marking-definition.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "marking-definition",
	"description": "The marking-definition object represents a specific marking.",
	"type": "object",
	"properties": {
		"type": {
			"type": "string",
			"description": "The type of this object, which MUST be the literal `marking-definition`.",
			"enum": [
				"marking-definition"
			]
		},
		"id": {
			"allOf": [
				{
					"$ref": "identifier.json",
					"description": "An identifier for this bundle."
				},
				{
					"title": "id",
					"pattern": "^marking-definition--"
				}
			]
		},
		"created_by_ref": {
			"$ref": "identifier.json",
			"description": "The created_by_ref property specifies the ID of the identity object that describes the entity that created this Marking Definition."
		},
		"created": {
			"$ref": "timestamp.json",
			"description": "The created property represents the time at which the first version of this Marking Definition object was created."
		},
		"external_references": {
			"type": "array",
			"description": "A list of external references which refers to non-STIX information.",
			"items": {
				"$ref": "external-reference.json"
			},
			"minItems": 1
		},
		"object_marking_refs": {
			"type": "array",
			"description": "The object_marking_refs property specifies a list of IDs of marking-definition objects that apply to this Marking Definition.",
			"items": {
				"$ref": "identifier.json",
				"pattern": "^marking-definition--"
			},
			"minItems": 1
		},
		"granular_markings": {
			"type": "array",
			"description": "The granular_markings property specifies a list of granular markings applied to this object.",
			"items": {
				"$ref": "granular-marking.json"
			},
			"minItems": 1
		}
	},
	"oneOf": [
		{
			"properties": {
				"definition_type": {
					"type": "string",
					"description": "The definition_type property identifies the type of Marking Definition.",
					"pattern": "^statement$"
				},
				"definition": {
					"$ref": "#/definitions/statement",
					"description": "The definition property contains the marking object itself."
				}
			}
		},
		{
			"properties": {
				"definition_type": {
					"type": "string",
					"description": "The definition_type property identifies the type of Marking Definition.",
					"pattern": "^tlp$"
				},
				"definition": {
					"$ref": "#/definitions/tlp",
					"description": "The definition property contains the marking object itself."
				}
			}
		},
		{
			"properties": {
				"definition_type": {
					"type": "string",
					"description": "The definition_type property identifies the type of Marking Definition.",
					"not": {
						"pattern": "^(statement)|(tlp)$"
					}
				},
				"definition": {
					"type": "object",
					"description": "The definition property contains the marking object itself."
				}
			}
		}
	],
	"required": [
		"id",
		"type",
		"definition",
		"definition_type",
		"created"
	],
	"definitions": {
		"statement": {
			"type": "object",
			"description": "The Statement marking type defines the representation of a textual marking statement (e.g., copyright, terms of use, etc.) in a definition",
			"properties": {
				"statement": {
					"type": "string",
					"description": "A statement (e.g., copyright, terms of use) applied to the content marked by this marking definition."
				}
			},
			"required": [
				"statement"
			]
		},
		"tlp": {
			"type": "object",
			"description": "The TLP marking type defines how you would represent a Traffic Light Protocol (TLP) marking in a definition field.",
			"properties": {
				"tlp": {
					"type": "string",
					"description": "The TLP level of the content marked by this marking definition, as defined in this section.",
					"enum": [
						"white",
						"green",
						"amber",
						"red"
					]
				}
			},
			"required": [
				"tlp"
			]
		}
	}
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/timestamp.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "timestamp",
	"description": "Represents timestamps across the CTI specifications. The format is an RFC3339 timestamp, with a required timezone specification of 'Z'.",
	"type": "string",
	"pattern": "^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?Z$"
};

/***/ }),

/***/ "../../../../../src/app/schemas/common/url-regex.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "url",
	"description": "Matches the elements of a URL using a regular expression. Uses Diego Perini's regex from https://gist.github.com/dperini/729294.",
	"type": "string",
	"pattern": "^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)(?:\\.(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)*(?:\\.(?:[a-z¡-￿]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$"
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/attack-pattern.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "attack-pattern",
	"description": "Attack Patterns are a type of TTP that describe ways that adversaries attempt to compromise targets. ",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `attack-pattern`.",
					"enum": [
						"attack-pattern"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^attack-pattern--"
				},
				"name": {
					"type": "string",
					"description": "The name used to identify the Attack Pattern."
				},
				"description": {
					"type": "string",
					"description": "A description that provides more details and context about the Attack Pattern, potentially including its purpose and its key characteristics."
				},
				"kill_chain_phases": {
					"type": "array",
					"description": "The list of kill chain phases for which this attack pattern is used.",
					"items": {
						"$ref": "../common/kill-chain-phase.json"
					},
					"minItems": 1
				}
			}
		}
	],
	"required": [
		"name"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/campaign.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "campaign",
	"description": "A Campaign is a grouping of adversary behavior that describes a set of malicious activities or attacks that occur over a period of time against a specific set of targets.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `campaign`.",
					"enum": [
						"campaign"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^campaign--"
				},
				"name": {
					"type": "string",
					"description": "The name used to identify the Campaign."
				},
				"description": {
					"type": "string",
					"description": "A description that provides more details and context about the Campaign, potentially including its purpose and its key characteristics."
				},
				"aliases": {
					"type": "array",
					"description": "Alternative names used to identify this campaign.",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"first_seen": {
					"$ref": "../common/timestamp.json",
					"description": "The time that this Campaign was first seen."
				},
				"last_seen": {
					"$ref": "../common/timestamp.json",
					"description": "The time that this Campaign was last seen."
				},
				"objective": {
					"type": "string",
					"description": "This field defines the Campaign’s primary goal, objective, desired outcome, or intended effect."
				}
			}
		}
	],
	"required": [
		"name"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/course-of-action.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "course-of-action",
	"description": "A Course of Action is an action taken either to prevent an attack or to respond to an attack that is in progress. ",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `course-of-action`.",
					"enum": [
						"course-of-action"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^course-of-action--"
				},
				"name": {
					"type": "string",
					"description": "The name used to identify the Course of Action."
				},
				"description": {
					"type": "string",
					"description": "A description that provides more details and context about this object, potentially including its purpose and its key characteristics."
				}
			}
		}
	],
	"required": [
		"name"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/identity.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "identity",
	"description": "Identities can represent actual individuals, organizations, or groups (e.g., ACME, Inc.) as well as classes of individuals, organizations, or groups.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `identity`.",
					"enum": [
						"identity"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^identity--"
				},
				"labels": {
					"type": "array",
					"description": "The list of roles that this Identity performs (e.g., CEO, Domain Administrators, Doctors, Hospital, or Retailer). No open vocabulary is yet defined for this property.",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"name": {
					"type": "string",
					"description": "The name of this Identity."
				},
				"description": {
					"type": "string",
					"description": "A description that provides more details and context about the Identity."
				},
				"identity_class": {
					"type": "string",
					"description": "The type of entity that this Identity describes, e.g., an individual or organization. Open Vocab - identity-class-ov"
				},
				"sectors": {
					"type": "array",
					"description": "The list of sectors that this Identity belongs to. Open Vocab - industry-sector-ov",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"contact_information": {
					"type": "string",
					"description": "The contact information (e-mail, phone number, etc.) for this Identity."
				}
			}
		}
	],
	"required": [
		"name",
		"identity_class"
	],
	"definitions": {
		"identity-class-ov": {
			"type": "string",
			"enum": [
				"individual",
				"group",
				"organization",
				"class",
				"unknown"
			]
		},
		"industry-sector-ov": {
			"type": "string",
			"enum": [
				"agriculture",
				"aerospace",
				"automotive",
				"communications",
				"construction",
				"defence",
				"education",
				"energy",
				"engineering",
				"entertainment",
				"financial-services",
				"government-national",
				"government-regional",
				"government-local",
				"government-public-services",
				"healthcare",
				"hospitality-leisure",
				"infrastructure",
				"insurance",
				"manufacturing",
				"mining",
				"non-profit",
				"pharmaceuticals",
				"retail",
				"technology",
				"telecommunications",
				"transportation",
				"utilities"
			]
		}
	}
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/index.js":
/***/ (function(module, exports, __webpack_require__) {

exports["attack-pattern"] = __webpack_require__("../../../../../src/app/schemas/sdos/attack-pattern.json");
exports["campaign"] = __webpack_require__("../../../../../src/app/schemas/sdos/campaign.json");
exports["course-of-action"] = __webpack_require__("../../../../../src/app/schemas/sdos/course-of-action.json");
exports["identity"] = __webpack_require__("../../../../../src/app/schemas/sdos/identity.json");
exports["indicator"] = __webpack_require__("../../../../../src/app/schemas/sdos/indicator.json");
exports["intrusion-set"] = __webpack_require__("../../../../../src/app/schemas/sdos/intrusion-set.json");
exports["malware"] = __webpack_require__("../../../../../src/app/schemas/sdos/malware.json");
// observed data would go here
exports["report"] = __webpack_require__("../../../../../src/app/schemas/sdos/report.json");
exports["threat-actor"] = __webpack_require__("../../../../../src/app/schemas/sdos/threat-actor.json");
exports["tool"] = __webpack_require__("../../../../../src/app/schemas/sdos/tool.json");
exports["vulnerability"] = __webpack_require__("../../../../../src/app/schemas/sdos/vulnerability.json");


/***/ }),

/***/ "../../../../../src/app/schemas/sdos/indicator.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "indicator",
	"description": "Indicators contain a pattern that can be used to detect suspicious or malicious cyber activity.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `indicator`.",
					"enum": [
						"indicator"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^indicator--"
				},
				"labels": {
					"type": "array",
					"description": "This field is an Open Vocabulary that specifies the type of indicator. Open vocab - indicator-label-ov",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"name": {
					"type": "string",
					"description": "The name used to identify the Indicator."
				},
				"description": {
					"type": "string",
					"description": "A description that provides the recipient with context about this Indicator potentially including its purpose and its key characteristics."
				},
				"pattern": {
					"type": "string",
					"description": "The detection pattern for this indicator. The default language is STIX Patterning."
				},
				"valid_from": {
					"$ref": "../common/timestamp.json",
					"description": "The time from which this indicator should be considered valuable intelligence."
				},
				"valid_until": {
					"$ref": "../common/timestamp.json",
					"description": "The time at which this indicator should no longer be considered valuable intelligence."
				},
				"kill_chain_phases": {
					"type": "array",
					"description": "The phases of the kill chain that this indicator detects.",
					"items": {
						"$ref": "../common/kill-chain-phase.json",
						"minItems": 1
					}
				}
			}
		}
	],
	"required": [
		"pattern",
		"labels",
		"valid_from"
	],
	"definitions": {
		"indicator-label-ov": {
			"type": "string",
			"enum": [
				"anomalous-activity",
				"anonymization",
				"benign",
				"compromised",
				"malicious-activity",
				"attribution"
			]
		}
	}
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/intrusion-set.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "intrusion-set",
	"description": "An Intrusion Set is a grouped set of adversary behavior and resources with common properties that is believed to be orchestrated by a single organization.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `intrusion-set`.",
					"enum": [
						"intrusion-set"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^intrusion-set--"
				},
				"name": {
					"type": "string",
					"description": "The name used to identify the Intrusion Set."
				},
				"description": {
					"type": "string",
					"description": "Provides more context and details about the Intrusion Set object."
				},
				"aliases": {
					"type": "array",
					"description": "Alternative names used to identify this Intrusion Set.",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"first_seen": {
					"$ref": "../common/timestamp.json",
					"description": "The time that this Intrusion Set was first seen."
				},
				"last_seen": {
					"$ref": "../common/timestamp.json",
					"description": "The time that this Intrusion Set was last seen."
				},
				"goals": {
					"type": "array",
					"description": "The high level goals of this Intrusion Set, namely, what are they trying to do.",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"resource_level": {
					"type": "string",
					"description": "This defines the organizational level at which this Intrusion Set typically works. Open Vocab - attack-resource-level-ov"
				},
				"primary_motivation": {
					"type": "string",
					"description": "The primary reason, motivation, or purpose behind this Intrusion Set. Open Vocab - attack-motivation-ov"
				},
				"secondary_motivations": {
					"type": "array",
					"description": "The secondary reasons, motivations, or purposes behind this Intrusion Set. Open Vocab - attack-motivation-ov",
					"items": {
						"type": "string"
					},
					"minItems": 1
				}
			}
		}
	],
	"required": [
		"name"
	],
	"definitions": {
		"attack-resource-level-ov": {
			"type": "string",
			"enum": [
				"individual",
				"club",
				"contest",
				"team",
				"organization",
				"government"
			]
		},
		"attack-motivation-ov": {
			"type": "string",
			"enum": [
				"accidental",
				"coercion",
				"dominance",
				"ideology",
				"notoriety",
				"organizational-gain",
				"personal-gain",
				"personal-satisfaction",
				"revenge",
				"unpredictable"
			]
		}
	}
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/malware.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "malware",
	"description": "MMalware is a type of TTP that is also known as malicious code and malicious software, refers to a program that is inserted into a system, usually covertly, with the intent of compromising the confidentiality, integrity, or availability of the victim's data, applications, or operating system (OS) or of otherwise annoying or disrupting the victim.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `malware`.",
					"enum": [
						"malware"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^malware--"
				},
				"labels": {
					"type": "array",
					"description": "The type of malware being described. Open Vocab - malware-label-ov",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"name": {
					"type": "string",
					"description": "The name used to identify the Malware."
				},
				"description": {
					"type": "string",
					"description": "Provides more context and details about the Malware object."
				},
				"kill_chain_phases": {
					"type": "array",
					"description": "The list of kill chain phases for which this Malware instance can be used.",
					"items": {
						"$ref": "../common/kill-chain-phase.json"
					},
					"minItems": 1
				}
			}
		}
	],
	"required": [
		"name",
		"labels"
	],
	"definitions": {
		"malware-label-ov": {
			"type": "string",
			"enum": [
				"adware",
				"backdoor",
				"bot",
				"ddos",
				"dropper",
				"exploit-kit",
				"keylogger",
				"ransomware",
				"remote-access-trojan",
				"resource-exploitation",
				"rogue-security-software",
				"rootkit",
				"screen-capture",
				"spyware",
				"trojan",
				"virus",
				"worm"
			]
		}
	}
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/report.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "report",
	"description": "Reports are collections of threat intelligence focused on one or more topics, such as a description of a threat actor, malware, or attack technique, including context and related details.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `report`.",
					"enum": [
						"report"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^report--"
				},
				"labels": {
					"type": "array",
					"description": "This field is an Open Vocabulary that specifies the primary subject of this report. The suggested values for this field are in report-label-ov.",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"name": {
					"type": "string",
					"description": "The name used to identify the Report."
				},
				"description": {
					"type": "string",
					"description": "A description that provides more details and context about Report."
				},
				"published": {
					"$ref": "../common/timestamp.json",
					"description": "The date that this report object was officially published by the creator of this report."
				},
				"object_refs": {
					"type": "array",
					"description": "Specifies the STIX Objects that are referred to by this Report.",
					"items": {
						"$ref": "../common/identifier.json"
					},
					"minItems": 1
				}
			}
		}
	],
	"required": [
		"name",
		"labels",
		"object_refs",
		"published"
	],
	"definitions": {
		"report-label-ov": {
			"type": "string",
			"enum": [
				"threat-report",
				"attack-pattern",
				"campaign",
				"identity",
				"indicator",
				"malware",
				"observed-data",
				"threat-actor",
				"tool",
				"vulnerability"
			]
		}
	}
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/threat-actor.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "threat-actor",
	"description": "Threat Actors are actual individuals, groups, or organizations believed to be operating with malicious intent.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `threat-actor`.",
					"enum": [
						"threat-actor"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^threat-actor--"
				},
				"labels": {
					"type": "array",
					"description": "This field specifies the type of threat actor. Open Vocab - threat-actor-label-ov",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"name": {
					"type": "string",
					"description": "A name used to identify this Threat Actor or Threat Actor group."
				},
				"description": {
					"type": "string",
					"description": "A description that provides more details and context about the Threat Actor."
				},
				"aliases": {
					"type": "array",
					"description": "A list of other names that this Threat Actor is believed to use.",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"roles": {
					"type": "array",
					"description": "This is a list of roles the Threat Actor plays. Open Vocab - threat-actor-role-ov",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"goals": {
					"type": "array",
					"description": "The high level goals of this Threat Actor, namely, what are they trying to do.",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"sophistication": {
					"type": "string",
					"description": "The skill, specific knowledge, special training, or expertise a Threat Actor must have to perform the attack. Open Vocab - threat-actor-sophistication-ov"
				},
				"resource_level": {
					"type": "string",
					"description": "This defines the organizational level at which this Threat Actor typically works. Open Vocab - attack-resource-level-ov"
				},
				"primary_motivation": {
					"type": "string",
					"description": "The primary reason, motivation, or purpose behind this Threat Actor. Open Vocab - attack-motivation-ov"
				},
				"secondary_motivations": {
					"type": "array",
					"description": "The secondary reasons, motivations, or purposes behind this Threat Actor. Open Vocab - attack-motivation-ov",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"personal_motivations": {
					"type": "array",
					"description": "The personal reasons, motivations, or purposes of the Threat Actor regardless of organizational goals. Open Vocab - attack-motivation-ov",
					"items": {
						"type": "string"
					},
					"minItems": 1
				}
			}
		}
	],
	"required": [
		"name",
		"labels"
	],
	"definitions": {
		"threat-actor-label-ov": {
			"type": "string",
			"enum": [
				"activist",
				"competitor",
				"crime-syndicate",
				"criminal",
				"hacker",
				"insider-accidental",
				"insider-disgruntled",
				"nation-state",
				"sensationalist",
				"spy",
				"terrorist"
			]
		},
		"threat-actor-role-ov": {
			"type": "string",
			"enum": [
				"agent",
				"director",
				"independent",
				"sponsor",
				"infrastructure-operator",
				"infrastructure-architect",
				"malware-author"
			]
		},
		"threat-actor-sophistication-ov": {
			"type": "string",
			"enum": [
				"none",
				"minimal",
				"intermediate",
				"advanced",
				"strategic",
				"expert",
				"innovator"
			]
		},
		"attack-resource-level-ov": {
			"type": "string",
			"enum": [
				"individual",
				"club",
				"contest",
				"team",
				"organization",
				"government"
			]
		},
		"attack-motivation-ov": {
			"type": "string",
			"enum": [
				"accidental",
				"coercion",
				"dominance",
				"ideology",
				"notoriety",
				"organizational-gain",
				"personal-gain",
				"personal-satisfaction",
				"revenge",
				"unpredictable"
			]
		}
	}
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/tool.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "tool",
	"description": "Tools are legitimate software that can be used by threat actors to perform attacks.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `tool`.",
					"enum": [
						"tool"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^tool--"
				},
				"labels": {
					"type": "array",
					"description": "The kind(s) of tool(s) being described. Open Vocab - tool-label-ov",
					"items": {
						"type": "string"
					},
					"minItems": 1
				},
				"name": {
					"type": "string",
					"description": "The name used to identify the Tool."
				},
				"description": {
					"type": "string",
					"description": "Provides more context and details about the Tool object."
				},
				"tool_version": {
					"type": "string",
					"description": "The version identifier associated with the tool."
				},
				"kill_chain_phases": {
					"type": "array",
					"description": "The list of kill chain phases for which this Tool instance can be used.",
					"items": {
						"$ref": "../common/kill-chain-phase.json"
					},
					"minItems": 1
				}
			}
		}
	],
	"required": [
		"name",
		"labels"
	],
	"definitions": {
		"tool-label-ov": {
			"type": "string",
			"enum": [
				"denial-of-service",
				"exploitation",
				"information-gathering",
				"network-capture",
				"credential-exploitation",
				"remote-access",
				"vulnerability-scanning"
			]
		}
	}
};

/***/ }),

/***/ "../../../../../src/app/schemas/sdos/vulnerability.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "vulnerability",
	"description": "A Vulnerability is a mistake in software that can be directly used by a hacker to gain access to a system or network.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `vulnerability`.",
					"enum": [
						"vulnerability"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^vulnerability--"
				},
				"name": {
					"type": "string",
					"description": "The name used to identify the Vulnerability."
				},
				"description": {
					"type": "string",
					"description": "A description that provides more details and context about the Vulnerability."
				}
			}
		}
	],
	"required": [
		"name"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/sros/index.js":
/***/ (function(module, exports, __webpack_require__) {

exports["relationship"] = __webpack_require__("../../../../../src/app/schemas/sros/relationship.json");
exports["sighting"] = __webpack_require__("../../../../../src/app/schemas/sros/sighting.json");


/***/ }),

/***/ "../../../../../src/app/schemas/sros/relationship.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "relationship",
	"description": "The Relationship object is used to link together two SDOs in order to describe how they are related to each other.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `relationship`.",
					"enum": [
						"relationship"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^relationship--"
				},
				"relationship_type": {
					"type": "string",
					"description": "The name used to identify the type of relationship.",
					"pattern": "^[a-z0-9\\-]+$"
				},
				"description": {
					"type": "string",
					"description": "A description that helps provide context about the relationship."
				},
				"source_ref": {
					"description": "The ID of the source (from) object.",
					"allOf": [
						{
							"$ref": "../common/identifier.json"
						},
						{
							"not": {
								"pattern": "^(relationship|sighting|bundle|marking-definition)--.+$"
							}
						}
					]
				},
				"target_ref": {
					"description": "The ID of the target (to) object.",
					"allOf": [
						{
							"$ref": "../common/identifier.json"
						},
						{
							"not": {
								"pattern": "^(relationship|sighting|bundle|marking-definition)--.+$"
							}
						}
					]
				}
			}
		}
	],
	"required": [
		"relationship_type",
		"source_ref",
		"target_ref"
	]
};

/***/ }),

/***/ "../../../../../src/app/schemas/sros/sighting.json":
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "sighting",
	"description": "A Sighting denotes the belief that something in CTI (e.g., an indicator, malware, tool, threat actor, etc.) was seen.",
	"type": "object",
	"allOf": [
		{
			"$ref": "../common/core.json"
		},
		{
			"properties": {
				"type": {
					"type": "string",
					"description": "The type of this object, which MUST be the literal `sighting`.",
					"enum": [
						"sighting"
					]
				},
				"id": {
					"title": "id",
					"pattern": "^sighting--"
				},
				"first_seen": {
					"$ref": "../common/timestamp.json",
					"description": "The beginning of the time window during which the SDO referenced by the sighting_of_ref property was sighted."
				},
				"last_seen": {
					"$ref": "../common/timestamp.json",
					"description": "The end of the time window during which the SDO referenced by the sighting_of_ref property was sighted."
				},
				"count": {
					"type": "integer",
					"description": "This is an integer between 0 and 999,999,999 inclusive and represents the number of times the object was sighted.",
					"minimum": 0,
					"maximum": 999999999
				},
				"sighting_of_ref": {
					"$ref": "../common/identifier.json",
					"not": {
						"anyOf": [
							{
								"pattern": "^sighting--"
							},
							{
								"pattern": "^relationship--"
							}
						]
					},
					"description": "An ID reference to the object that has been sighted."
				},
				"observed_data_refs": {
					"type": "array",
					"description": "A list of ID references to the Observed Data objects that contain the raw cyber data for this Sighting.",
					"items": {
						"$ref": "../common/identifier.json",
						"pattern": "^observed-data--"
					},
					"minItems": 1
				},
				"where_sighted_refs": {
					"type": "array",
					"description": "The ID of the Victim Target objects of the entities that saw the sighting.",
					"items": {
						"$ref": "../common/identifier.json",
						"pattern": "^identity--"
					},
					"minItems": 1
				},
				"summary": {
					"type": "boolean",
					"description": "The summary property indicates whether the Sighting should be considered summary data. "
				}
			}
		}
	],
	"required": [
		"sighting_of_ref"
	]
};

/***/ }),

/***/ "../../../../../src/app/stix.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tv4__ = __webpack_require__("../../../../tv4/tv4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tv4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tv4__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stix; });


var Stix;
(function (Stix) {
    Stix.sroTypes = ["relationship", "sighting"];
    Stix.sdoTypes = ["attack-pattern", "campaign", "course-of-action", "identity", "indicator", "intrusion-set", "malware", "observed-data", "report", "threat-actor", "tool", "vulnerability"];
    Stix.schemas = {
        "common": __webpack_require__("../../../../../src/app/schemas/common/index.js"),
        "sdos": __webpack_require__("../../../../../src/app/schemas/sdos/index.js"),
        "sros": __webpack_require__("../../../../../src/app/schemas/sros/index.js")
    };
    var Bundle = (function () {
        function Bundle() {
            this.type = "bundle";
            this.id = "bundle--" + __WEBPACK_IMPORTED_MODULE_0_uuid__["v4"]();
            this.spec_version = "2.0";
            this.objects = [];
        }
        return Bundle;
    }());
    Stix.Bundle = Bundle;
    var Object = (function () {
        function Object(stixType, properties) {
            var now = new Date().toISOString();
            this.type = stixType;
            this.id = properties.id || this.generateId(stixType);
            this.created = properties.created || now;
            if (this.type != "data-marking") {
                this.modified = properties.modified || now;
            }
            for (var key in properties) {
                this[key] = properties[key];
            }
        }
        Object.prototype.generateId = function (stixType) {
            return stixType + "--" + __WEBPACK_IMPORTED_MODULE_0_uuid__["v4"]();
        };
        Object.prototype.valid = function () {
            var valid = validate(JSON.parse(JSON.stringify(this)));
            if (valid !== null) {
                console.log(valid);
            }
            return valid;
        };
        return Object;
    }());
    Stix.Object = Object;
    function validate(instance) {
        // Needs to look up the correct schema and validate it
        if (Stix.sroTypes.indexOf(instance.type) > -1) {
            return __WEBPACK_IMPORTED_MODULE_1_tv4__["validateResult"](instance, Stix.schemas.sros[instance.type]);
        }
        else if (Stix.sdoTypes.indexOf(instance.type) > -1) {
            return __WEBPACK_IMPORTED_MODULE_1_tv4__["validateResult"](instance, Stix.schemas.sdos[instance.type]);
        }
        else {
            return null;
        }
    }
    Stix.validate = validate;
    // Initializes tv4 by adding the schemas that we might need to reference from elsewhere
    function initValidator() {
        ["common", "sdos", "sros"].forEach(function (ns) {
            for (var key in Stix.schemas[ns]) {
                var id = "/stix/" + ns + "/" + key + ".json";
                Stix.schemas[ns][key]["$id"] = id;
                __WEBPACK_IMPORTED_MODULE_1_tv4__["addSchema"](id, Stix.schemas[ns][key]);
            }
        });
    }
    Stix.initValidator = initValidator;
})(Stix || (Stix = {}));
//# sourceMappingURL=stix.js.map

/***/ }),

/***/ "../../../../../src/app/visualizer/visualizer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#d3container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.links path {\n  stroke: #aaa;\n  stroke-width: 1;\n  marker-end: url(#end);\n}\n\n.nodes g image {\n  width: 30px;\n  height: 30px;\n}\n\n.nodes text {\n  font-size: 16px;\n  stroke-width: 10px;\n  stroke: white;\n  stroke-opacity: 0.7;\n  paint-order: stroke;\n}\n\ntext {\n  font-family: 'Source Sans Pro', monospace;\n}\n\n.link text {\n  text-anchor: middle;\n  font-size: 13px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visualizer/visualizer.component.html":
/***/ (function(module, exports) {

module.exports = "<div #d3container id=\"d3container\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/visualizer/visualizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualizerComponent = (function () {
    function VisualizerComponent(container) {
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.nodes = [];
        this.edges = [];
        this.initialized = false;
    }
    VisualizerComponent.prototype.ngOnInit = function () {
        this.createViz();
    };
    VisualizerComponent.prototype.createViz = function () {
        var _this = this;
        var element = this.d3Container.nativeElement;
        // height and width are set, subtracting the margins
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        // minSize is the smaller or either height or width
        if (this.width < this.height) {
            this.minSize = this.width;
        }
        else {
            this.minSize = this.height;
        }
        // Create the svg element as a child of the container and set its size manually
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](element).append('svg')
            .attr('width', element.offsetWidth - 20)
            .attr('height', element.offsetHeight - 20);
        this.svg.append("g").attr("class", "links");
        this.svg.append("g").attr("class", "nodes");
        // this is a simple force layout, centered horizontally and vertically
        this.forceLayout = __WEBPACK_IMPORTED_MODULE_1_d3__["forceSimulation"]()
            .force("charge", __WEBPACK_IMPORTED_MODULE_1_d3__["forceManyBody"]().strength(this.minSize * -2).distanceMax(this.minSize / 2))
            .force("center", __WEBPACK_IMPORTED_MODULE_1_d3__["forceCenter"](this.width / 2, this.height / 2))
            .force("collide", __WEBPACK_IMPORTED_MODULE_1_d3__["forceCollide"]().radius(40));
        // the tick function just updates the x and the y based on the layout x and y
        this.forceLayout.on("tick", function () {
            if (_this.edge === undefined) {
                return;
            }
            _this.edge.select("path").attr("d", function (d) {
                var dx = d.target.x - d.source.x;
                var dy = d.target.y - d.source.y;
                var dr = 0;
                return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
            });
            _this.node.attr("transform", function (d) {
                return "translate(" + (d.x - 15) + "," + (d.y - 15) + ")";
            });
            _this.edgeLabels.attr('transform', function (d, i) {
                if (d.target.x < d.source.x) {
                    var bbox = this.getBBox();
                    var rx = bbox.x + bbox.width / 2;
                    var ry = bbox.y + bbox.height / 2;
                    return 'rotate(180 ' + rx + ' ' + ry + ')';
                }
                else {
                    return 'rotate(0)';
                }
            });
        });
        // SVG Defs are things that can be re-used
        // In this case we define the marker (arrowhead)
        var defs = this.svg.append("svg:defs");
        defs.selectAll("marker")
            .data(["end"]) // Different link/path types can be defined here
            .enter().append("svg:marker") // This section adds in the arrows
            .attr("id", String)
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 33)
            .attr("refY", 0)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .style("stroke-width", 0)
            .style("fill", "#aaa")
            .append("svg:path")
            .attr("d", "M0,-5L10,0L0,5");
        this.initialized = true;
    };
    VisualizerComponent.prototype.visualize = function (stix) {
        var _this = this;
        this.currentlyShowing = stix;
        if (!this.initialized) {
            return;
        }
        ;
        this.processData(stix);
        // ---------------- Start Edges -----------------
        this.edge = this.svg.select("g.links")
            .selectAll(".link")
            .data(this.edges, function (d) { return d.id; });
        var enterEdge = this.edge
            .enter().append("g")
            .attr("class", "link");
        enterEdge.append("path").attr("id", function (d) { return "path-" + d.id; });
        enterEdge.append("text").append("textPath").attr("xlink:href", function (d) { return "#path-" + d.id; }).attr("startOffset", "50%");
        var exitEdge = this.edge.exit().remove();
        this.edge = enterEdge.merge(this.edge);
        this.edge.select("textPath").text(function (d) { return d.label; });
        this.edgeLabels = this.edge.select('text');
        // ---------------- End Edges -----------------
        // ---------------- Nodes -----------------
        // UPDATE
        this.node = this.svg.select("g.nodes")
            .selectAll(".node")
            .data(this.nodes, function (d) { return d.id; });
        // ENTER
        var enterNode = this.node
            .enter().append("g")
            .attr("class", "node");
        enterNode.append("image").attr("xlink:href", function (d) { return "icons/" + d.type + ".png"; }).attr('width', 30).attr('height', 30);
        enterNode.append("title");
        enterNode.append("text").attr("dx", 40).attr("dy", 20);
        // EXIT
        var exitNode = this.node.exit().remove();
        this.node = enterNode.merge(this.node);
        this.node.select("title").text(function (d) { return d.name; });
        this.node.select("text").text(function (d) { return d.name; });
        this.node.call(__WEBPACK_IMPORTED_MODULE_1_d3__["drag"]()
            .on("start", function (d) {
            if (!__WEBPACK_IMPORTED_MODULE_1_d3__["event"].active) {
                _this.forceLayout.alphaTarget(0.3).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
        }).on("drag", function (d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_1_d3__["event"].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_1_d3__["event"].y;
        }).on("end", function (d) {
            if (!__WEBPACK_IMPORTED_MODULE_1_d3__["event"].active) {
                _this.forceLayout.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        }));
        // ---------------- End Nodes -----------------
    };
    VisualizerComponent.prototype.processData = function (stix) {
        var _this = this;
        this.forceLayout.stop();
        // Save the old nodes because they contain the existing x, y, vx, vy attributes
        var oldNodes = this.nodes.reduce(function (mp, val) { mp[val.id] = val; return mp; }, {});
        this.nodes = stix.objects.filter(function (n) { return n.type !== 'relationship'; }).map(function (d) { return Object.assign({}, d); });
        // Look through the old nodes and, if it's an update, copy the existing positions back (x, y, vx, vy)
        // This prevents the layout from resetting each time
        this.nodes.forEach(function (n) {
            if (oldNodes[n.id]) {
                n.x = oldNodes[n.id].x;
                n.y = oldNodes[n.id].y;
                n.vx = oldNodes[n.id].vx;
                n.vy = oldNodes[n.id].vy;
            }
        });
        this.edges = [];
        stix.objects.forEach(function (n) {
            if (n.type == 'relationship') {
                // This if statement prevents us from trying to draw relationships that don't exit
                if (n['source_ref'] && n['target_ref']) {
                    var source = stix.objects.find(function (o) { return o.id == n['source_ref']; });
                    var target = stix.objects.find(function (o) { return o.id == n['target_ref']; });
                    if (source && source.type != "relationship" && target && target.type != "relationship") {
                        _this.edges.push({ id: n.id, source: n['source_ref'], target: n['target_ref'], label: n['relationship_type'] });
                    }
                }
            }
            else {
                _this.resolveRelationships(n, stix, n.id);
            }
        });
        this.forceLayout.nodes(this.nodes);
        this.forceLayout.force('link', __WEBPACK_IMPORTED_MODULE_1_d3__["forceLink"](this.edges).id(function (d) { return d.id; }).distance(200));
        this.forceLayout.alpha(1).restart();
    };
    VisualizerComponent.prototype.resolveRelationships = function (obj, stix, sourceId) {
        var _loop_1 = function (k) {
            if (k.match(/_ref$/)) {
                if (stix.objects.find(function (o) { return o.id === obj[k]; })) {
                    this_1.edges.push({ id: obj.id + k, source: sourceId, target: obj[k], label: k });
                }
            }
            else if (k.match(/_refs$/)) {
                var _loop_2 = function (i) {
                    if (stix.objects.find(function (o) { return o.id === i; })) {
                        this_1.edges.push({ id: obj.id + k + i, source: sourceId, target: i, label: k });
                    }
                };
                for (var _i = 0, _a = obj[k]; _i < _a.length; _i++) {
                    var i = _a[_i];
                    _loop_2(i);
                }
            }
            else if (typeof obj[k] === "object") {
                this_1.resolveRelationships(obj[k], stix, sourceId);
            }
        };
        var this_1 = this;
        for (var k in obj) {
            _loop_1(k);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('d3container'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _a || Object)
    ], VisualizerComponent.prototype, "d3Container", void 0);
    VisualizerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'visualizer',
            template: __webpack_require__("../../../../../src/app/visualizer/visualizer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/visualizer/visualizer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ViewEncapsulation */].None // This is so the styles apply to the d3 generated elements
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _b || Object])
    ], VisualizerComponent);
    return VisualizerComponent;
    var _a, _b;
}());

//# sourceMappingURL=visualizer.component.js.map

/***/ }),

/***/ "../../../../../src/app/yaml-entry/yaml-entry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/yaml-entry/yaml-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<ace-editor #editor style=\"height:100%;\" (textChanged)=\"handleUserEntry($event)\" [theme]=\"'tomorrow'\" [mode]=\"'yaml'\" [(readOnly)]=\"readOnly\"></ace-editor>\n"

/***/ }),

/***/ "../../../../../src/app/yaml-entry/yaml-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stix__ = __webpack_require__("../../../../../src/app/stix.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml__ = __webpack_require__("../../../../js-yaml/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_yaml__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YamlEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var aceRange = ace.require('ace/range').Range;
var YamlEntryComponent = (function () {
    function YamlEntryComponent() {
        this.stixChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.settingText = false; // Super ugly but the only way to track whether the onChange event is real or fake is by setting this
        this.bundle = new __WEBPACK_IMPORTED_MODULE_1__stix__["a" /* Stix */].Bundle();
    }
    YamlEntryComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__stix__["a" /* Stix */].initValidator();
    };
    YamlEntryComponent.prototype.handleUserEntry = function (rawStix) {
        if (this.settingText) {
            return;
        }
        this.editor.text = rawStix;
        this.generateSTIX(rawStix);
        this.stixChanged.emit({ bundle: this.bundle, text: this.editor.text, persist: true });
    };
    YamlEntryComponent.prototype.handleNewStix = function (rawStix) {
        this.settingText = true;
        this.editor.text = rawStix;
        this.settingText = false;
        this.generateSTIX(rawStix);
        this.stixChanged.emit({ bundle: this.bundle, text: this.editor.text, persist: false });
    };
    YamlEntryComponent.prototype.splitObjects = function (input) {
        return input.split(/(?: *\n *\n)+/g).map(function (i) { return i.trim(); });
    };
    YamlEntryComponent.prototype.createStixObjects = function (yamlStrings) {
        var _this = this;
        var stixObjects = yamlStrings.map(function (yaml, i) {
            try {
                return _this.createStixObject(yaml, _this.bundle.objects[i]);
            }
            catch (e) {
                return null;
            }
        }).filter(function (item) { return item !== null && item !== undefined; });
        for (var _i = 0, stixObjects_1 = stixObjects; _i < stixObjects_1.length; _i++) {
            var obj = stixObjects_1[_i];
            this.resolveRelationships(obj, stixObjects);
        }
        return stixObjects;
    };
    YamlEntryComponent.prototype.createStixObject = function (yaml, existingObject) {
        var parsedItem = __WEBPACK_IMPORTED_MODULE_2_js_yaml__["safeLoad"](yaml);
        if (parsedItem instanceof Object) {
            var stixType = Object.keys(parsedItem)[0];
            if (parsedItem[stixType] instanceof Object) {
                var fields = parsedItem[stixType];
                if (existingObject && existingObject.type == stixType) {
                    fields['id'] = existingObject.id;
                }
                return new __WEBPACK_IMPORTED_MODULE_1__stix__["a" /* Stix */].Object(stixType, parsedItem[stixType]);
            }
        }
        else {
            return null;
        }
    };
    YamlEntryComponent.prototype.generateSTIX = function (from) {
        var objects = this.splitObjects(from);
        if (objects !== null && objects.length > 0) {
            this.bundle.objects = this.createStixObjects(objects);
        }
    };
    YamlEntryComponent.prototype.resolveRelationships = function (obj, allObjs) {
        for (var prop in obj) {
            if (prop.match(/_ref$/)) {
                obj[prop] = this.resolveRelationship(obj[prop], allObjs);
            }
            else if (prop.match(/_refs$/) && obj[prop].constructor === Array) {
                for (var i = 0; i < obj[prop].length; i++) {
                    obj[prop][i] = this.resolveRelationship(obj[prop][i], allObjs);
                }
            }
            else if (typeof obj[prop] === "object") {
                this.resolveRelationships(obj[prop], allObjs);
            }
        }
    };
    YamlEntryComponent.prototype.resolveRelationship = function (idref, allObjects) {
        if (typeof (idref) === "number" && allObjects[idref]) {
            return allObjects[idref].id;
        }
        else {
            var target = allObjects.find(function (o) { return o['name'] === idref; });
            if (target) {
                return target.id;
            }
        }
        return null;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('editor'),
        __metadata("design:type", Object)
    ], YamlEntryComponent.prototype, "editor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
        __metadata("design:type", Object)
    ], YamlEntryComponent.prototype, "stixChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
        __metadata("design:type", Boolean)
    ], YamlEntryComponent.prototype, "readOnly", void 0);
    YamlEntryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'yaml-entry',
            template: __webpack_require__("../../../../../src/app/yaml-entry/yaml-entry.component.html"),
            styles: [__webpack_require__("../../../../../src/app/yaml-entry/yaml-entry.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YamlEntryComponent);
    return YamlEntryComponent;
}());

//# sourceMappingURL=yaml-entry.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA2w2TATnSgUf559_unNUsoCKNklkeQ8Ys",
        authDomain: "cti-whittler.firebaseapp.com",
        databaseURL: "https://cti-whittler.firebaseio.com",
        projectId: "cti-whittler",
        storageBucket: "cti-whittler.appspot.com",
        messagingSenderId: "575815532508"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map