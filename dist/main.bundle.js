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

/***/ "../../../../../src/app/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:100px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-4\" style=\"margin-bottom:30px;\" *ngFor=\"let vm of items\">\r\n            <vm [data]=\"vm\"></vm>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vm_service__ = __webpack_require__("../../../../../src/app/vm.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(userService) {
        this.userService = userService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getVms().subscribe(function (data) {
            for (var item in data) {
                if (data[item].disks[0] != undefined) {
                    data[item].disks = (data[item].disks[0]["virtual-size"]) / (1024 * 1024 * 1024);
                }
            }
            _this.items = data;
        });
        this.userService.pollTasks().subscribe(function (data) {
            for (var item in data) {
                if (data[item].disks[0] != undefined) {
                    data[item].disks = (data[item].disks[0]["virtual-size"]) / (1024 * 1024 * 1024);
                }
            }
            _this.items = data;
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'about',
        template: __webpack_require__("../../../../../src/app/about.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vm_service__["a" /* VMService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vm_service__["a" /* VMService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <main-nav></main-nav>\r\n    <div  style=\"width:100%; height:calc( 100vh - 50px ); overflow:auto; margin-top:50px;\">\r\n    <router-outlet>\r\n\r\n    </router-outlet>\r\n    </div>\r\n<!--\r\n<div class=\"container\" style=\"margin-top:100px;\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <vm></vm>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n                <vm></vm>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n                <vm></vm>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n-->\r\n<div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_bootstrap_switch_components__ = __webpack_require__("../../../../angular2-bootstrap-switch/components.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_bootstrap_switch_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_bootstrap_switch_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_component__ = __webpack_require__("../../../../../src/app/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_component__ = __webpack_require__("../../../../../src/app/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detail_component__ = __webpack_require__("../../../../../src/app/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vmusage_component__ = __webpack_require__("../../../../../src/app/vmusage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vmconsole_component__ = __webpack_require__("../../../../../src/app/vmconsole.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vmhistory_component__ = __webpack_require__("../../../../../src/app/vmhistory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vmsettings_component__ = __webpack_require__("../../../../../src/app/vmsettings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vmcreate_component__ = __webpack_require__("../../../../../src/app/vmcreate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__vm_service__ = __webpack_require__("../../../../../src/app/vm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vm_component__ = __webpack_require__("../../../../../src/app/vm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"], __WEBPACK_IMPORTED_MODULE_20__app_router__["a" /* routes */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_bootstrap_switch_components__["SwitchComponent"],
            __WEBPACK_IMPORTED_MODULE_10__nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_19__vm_component__["a" /* VMComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__vmusage_component__["a" /* VMUsageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__vmconsole_component__["a" /* VMConsoleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__vmhistory_component__["a" /* VMHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_17__vmcreate_component__["a" /* VMCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_16__vmsettings_component__["a" /* VMSettingsComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_18__vm_service__["a" /* VMService */],],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component__ = __webpack_require__("../../../../../src/app/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_component__ = __webpack_require__("../../../../../src/app/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vmusage_component__ = __webpack_require__("../../../../../src/app/vmusage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vmconsole_component__ = __webpack_require__("../../../../../src/app/vmconsole.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vmhistory_component__ = __webpack_require__("../../../../../src/app/vmhistory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vmsettings_component__ = __webpack_require__("../../../../../src/app/vmsettings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vmcreate_component__ = __webpack_require__("../../../../../src/app/vmcreate.component.ts");
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








var router = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_1__about_component__["a" /* AboutComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_7__vmcreate_component__["a" /* VMCreateComponent */] },
    //{ path: 'detail', component: DetailComponent },
    {
        path: 'vm/:vmId',
        component: __WEBPACK_IMPORTED_MODULE_2__detail_component__["a" /* DetailComponent */],
        children: [
            { path: '', redirectTo: 'usage', pathMatch: 'full' },
            { path: 'usage', component: __WEBPACK_IMPORTED_MODULE_3__vmusage_component__["a" /* VMUsageComponent */] },
            { path: 'console', component: __WEBPACK_IMPORTED_MODULE_4__vmconsole_component__["a" /* VMConsoleComponent */] },
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_5__vmhistory_component__["a" /* VMHistoryComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_6__vmsettings_component__["a" /* VMSettingsComponent */] },
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__about_component__["a" /* AboutComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:6px; width:100%;\">\r\n    <div class=\"row\">\r\n        <div class=\"col-2\" style=\"padding-top:10px\">\r\n          <div class=\"card\">\r\n              <div class=\"card-block\">\r\n                  <ul class=\"nav nav-pills nav-fill flex-column\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"usage\">Metrics {{id}}</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"console\">Console</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"history\">History</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"settings\">Settings</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-10\" style=\"padding:0px\">\r\n            <div  style=\"width:100%; height:calc( 100vh - 56px ); overflow:auto\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DetailComponent = (function () {
    function DetailComponent() {
    }
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'detail',
        template: __webpack_require__("../../../../../src/app/detail.component.html"),
    })
], DetailComponent);

//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"\r\n          aria-controls=\"exCollapsingNavbar2\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" href=\"#\">Microstack</a>\r\n  <div [ngbCollapse]=\"isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"exCollapsingNavbar2\">\r\n    <div class=\"navbar-nav mr-auto\">\r\n      <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"list\">List</a>\r\n      <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"create\">Create</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavComponent = (function () {
    function NavComponent() {
        this.isNavbarCollapsed = true;
    }
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-nav',
        template: __webpack_require__("../../../../../src/app/nav.component.html"),
    })
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/vm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-group-justified {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n    border-collapse: separate;\r\n}\r\n.btn-group-justified .btn,\r\n.btn-group-justified .btn-group {\r\n    float: none;\r\n    display: table-cell;\r\n    width: 1%;\r\n}\r\n.btn-group-justified .btn .btn,\r\n.btn-group-justified .btn-group .btn {\r\n    width: 100%;\r\n}\r\n.btn-group-justified .btn .dropdown-menu,\r\n.btn-group-justified .btn-group .dropdown-menu {\r\n    left: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vm.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card vm_panel\">\r\n    <!--<div class=\"panel-heading\">\r\n        <img src=\"http://www.nhaines.com/blog/images/xerus_orange_hex.svg\" alt=\"\" class=\"img-responsive vm-header-img center-block\" />\r\n    </div>-->\r\n    <div class=\"card-block\">\r\n        <div class=\"vm-header\">\r\n        <h4>{{data.hostname}}</h4>\r\n        <!--<p>{{data.uuid}}</p>-->\r\n        </div>\r\n        <table class=\"table\">\r\n            <tr>\r\n                <td>Cores</td>\r\n                <td>{{data.cores}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Memory</td>\r\n                <td>{{(data.memory/(1024))}}MB</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Disk Size</td>\r\n                <td>{{data.disks}}GB</td>\r\n            </tr>\r\n            <tr>\r\n                <td>State</td>\r\n                <td>{{data.state}}</td>\r\n            </tr>\r\n\r\n        </table>\r\n    </div>\r\n\r\n    <div class=\"card-footer\" style=\"padding:0px;\">\r\n\r\n\r\n <div class=\"btn-group btn-group-justified\">\r\n  <a class=\"btn btn-success\" style=\"border-top-left-radius: 0;\" href=\"#\">\r\n      <i class=\"fa fa-play fa-lg\" style=\"font-size: 12px; padding: 0px; line-height: 0px;\"></i> Play\r\n  </a>\r\n  <a class=\"btn btn-primary\"  [routerLink]=\"['/vm/'+data.uuid]\">\r\n  <i class=\"fa fa-desktop fa-lg\" style=\"font-size: 12px; padding: 0px; line-height: 0px;\"></i> Detalis\r\n  </a>\r\n  <a class=\"btn btn-danger\" style=\"border-top-right-radius: 0;\" href=\"#\">\r\n      <i class=\"fa fa-trash-o fa-lg\" style=\"font-size: 12px; padding: 0px; line-height: 0px;\"></i> Delete\r\n  </a>\r\n\r\n</div>\r\n\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VMComponent = (function () {
    function VMComponent() {
    }
    return VMComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VMComponent.prototype, "data", void 0);
VMComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vm',
        template: __webpack_require__("../../../../../src/app/vm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vm.component.css")],
    })
], VMComponent);

//# sourceMappingURL=vm.component.js.map

/***/ }),

/***/ "../../../../../src/app/vm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VMService = (function () {
    function VMService(http) {
        this.http = http;
    }
    VMService.prototype.getVms = function () {
        return this.http.get("http://192.168.0.165:3000/vms/info")
            .map(function (res) { return res.json(); });
    };
    VMService.prototype.pollTasks = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(5000).switchMap(function () { return _this.http.get('http://192.168.0.165:3000/vms/info'); }).map(function (res) { return res.json(); });
    };
    return VMService;
}());
VMService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VMService);

var _a;
//# sourceMappingURL=vm.service.js.map

/***/ }),

/***/ "../../../../../src/app/vmconsole.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vmconsole.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width:100%; margin-right:0px;   padding: 0px;\">\r\n     <iframe width=\"100%\" style=\"height:calc(100vh - 62px);\" [src]=\"url\" frameborder=\"0\" allowfullscreen></iframe>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vmconsole.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMConsoleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VMConsoleComponent = (function () {
    function VMConsoleComponent(sanitizer, http, route, datePipe) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.route = route;
        this.datePipe = datePipe;
        this.sub = this.route.parent.params.subscribe(function (params) { _this.id = params['vmId']; console.log(params); });
        this.http = http;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://192.168.0.165:3000/vms/" + this.id + "/vnc");
    }
    return VMConsoleComponent;
}());
VMConsoleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vmconsole',
        template: __webpack_require__("../../../../../src/app/vmconsole.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vmconsole.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]) === "function" && _d || Object])
], VMConsoleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vmconsole.component.js.map

/***/ }),

/***/ "../../../../../src/app/vmcreate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"margin-top:50px; \">\r\n    <h3>Create VM</h3>\r\n    <hr/>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-3 col-form-label\" for=\"widgetName\" style=\"text-align: right; padding-top: 10px;\">VM name:</label>\r\n        <div class=\"col-6\">\r\n            <input  [(ngModel)]=\"vm.hostname\" class=\"form-control input-md\" type=\"text\" name=\"name\">\r\n        </div>\r\n    </div>\r\n    <hr/>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-3\"(click)=\"toggle('tiny')\">\r\n            <div class=\"card\" [ngStyle]=\"{'border-color': type.tiny.color, 'border-width': '2px'}\" >\r\n                <div class=\"card-heading\" style=\"text-align: center\"><h4>Tiny</h4></div>\r\n                <div class=\"card-block\" style=\"padding:0px\">\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <td style=\"text-align: center\">    {{type.tiny.memory}} MB </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"text-align: center\">   {{type.tiny.cores}} CPU </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"text-align: center\">    {{type.tiny.disk}}B DISK </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3\"(click)=\"toggle('small')\">\r\n            <div class=\"card\" [ngStyle]=\"{'border-color': type.small.color, 'border-width': '2px'}\" >\r\n                <div class=\"card-heading\" style=\"text-align: center\"><h4>Small</h4></div>\r\n                <div class=\"card-block\" style=\"padding:0px\">\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <td style=\"text-align: center\">    {{type.small.memory}} MB </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"text-align: center\">   {{type.small.cores}} CPU </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"text-align: center\">    {{type.small.disk}}B DISK </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3\"(click)=\"toggle('medium')\">\r\n            <div class=\"card\" [ngStyle]=\"{'border-color': type.medium.color, 'border-width': '2px'}\" >\r\n                <div class=\"panel-heading\" style=\"text-align: center\"><h4>Medium</h4></div>\r\n                <div class=\"card-block\" style=\"padding:0px\">\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <td style=\"text-align: center\">    {{type.medium.memory}} MB </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"text-align: center\">   {{type.medium.cores}} CPU </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"text-align: center\">    {{type.medium.disk}}B DISK </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3\" (click)=\"toggle('large')\">\r\n            <div class=\"card\"[ngStyle]=\"{'border-color': type.large.color, 'border-width': '2px'}\" >\r\n                <div class=\"panel-heading\" style=\"text-align: center\"><h4>Large</h4></div>\r\n                <div class=\"card-block\" style=\"padding:0px\">\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <td style=\"text-align: center\">    {{type.large.memory}} MB </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"text-align: center\">   {{type.large.cores}} CPU </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"text-align: center\">    {{type.large.disk}}B DISK </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr/>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <button class=\"btn btn-block btn-success\" (click)=\"create()\">Create</button>\r\n            <button class=\"btn btn-block btn-default\" [routerLink]=\"['/']\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vmcreate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vm_service__ = __webpack_require__("../../../../../src/app/vm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var VMCreateComponent = (function () {
    function VMCreateComponent(http, route, userService, datePipe) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.datePipe = datePipe;
        this.colors = ["blue", "default", "gray", "green", "red", "sky-blue", "yellow"];
        this.sizes = ["mini", "small", "normal", "large"];
        this.onText = "On";
        this.offText = "Off";
        this.onColor = "green";
        this.offColor = "red";
        this.size = "normal";
        this.disabled = false;
        this.value = true;
        this.vm = {
            hostname: "vm name",
            name: "",
            cores: 1,
            memory: 1024,
            disk: "6G"
        };
        this.type = {
            tiny: {
                color: "",
                active: false,
                cores: 1,
                memory: 1024,
                disk: "4G"
            },
            small: {
                color: "",
                active: false,
                cores: 1,
                memory: 2048,
                disk: "10G"
            },
            medium: {
                color: "",
                active: false,
                cores: 2,
                memory: 4096,
                disk: "30G"
            },
            large: {
                color: "",
                active: false,
                cores: 4,
                memory: 8192,
                disk: "60G"
            }
        };
        this.sub = this.route.parent.params.subscribe(function (params) { _this.id = params['vmId']; console.log(params); });
        this.http = http;
    }
    VMCreateComponent.prototype.toggle = function (type) {
        //alert("to trhe moon")
        for (var t in this.type) {
            if (t == type) {
                this.type[t].color = "blue";
                this.type[t].active = true;
                this.vm.cores = this.type[t].cores;
                this.vm.memory = this.type[t].memory;
                this.vm.disk = this.type[t].disk;
            }
            else {
                this.type[t].color = "";
                this.type[t].active = false;
            }
        }
    };
    VMCreateComponent.prototype.changeCores = function (amount) {
        console.log("hello", this.vm.cores, amount);
        this.vm.cores = this.vm.cores + amount;
    };
    VMCreateComponent.prototype.changeMemory = function (amount) {
        console.log("hello", this.vm.memory, amount);
        this.vm.memory = this.vm.memory + amount;
    };
    VMCreateComponent.prototype.create = function () {
        var _this = this;
        console.log(this.vm);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]();
        this.http.post('http://192.168.0.165:3000/vms/create', JSON.stringify(this.vm), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.items = data; }, function (err) { return console.log("ERROR:", err); }, function () { return console.log('Complete'); });
    };
    VMCreateComponent.prototype.vmPower = function (state) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://192.168.0.165:3000/vms/' + state, JSON.stringify({ uuid: this.id }), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.items = data; }, function (err) { return console.log("ERROR:", err); }, function () { return console.log('Complete'); });
    };
    VMCreateComponent.prototype.edit = function () {
        console.log(this.vm);
    };
    VMCreateComponent.prototype.ngOnInit = function () {
    };
    return VMCreateComponent;
}());
VMCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vmcreate',
        template: __webpack_require__("../../../../../src/app/vmcreate.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__vm_service__["a" /* VMService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__vm_service__["a" /* VMService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]) === "function" && _d || Object])
], VMCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vmcreate.component.js.map

/***/ }),

/***/ "../../../../../src/app/vmhistory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>History</h3>\r\n    <hr/>\r\n    <table class=\"table table-bordered\">\r\n        <tr>\r\n            <td>Action</td>\r\n            <td>Details</td>\r\n            <td>Time</td>\r\n        </tr>\r\n        <tr *ngFor=\"let vm of items\">\r\n                <td>{{vm.title}}</td>\r\n                <td>{{vm.text}}</td>\r\n                <td>{{convertDate(vm.date)}}</td>\r\n        </tr>\r\n\r\n\r\n    </table>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vmhistory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VMHistoryComponent = (function () {
    function VMHistoryComponent(http, route, datePipe) {
        var _this = this;
        this.route = route;
        this.datePipe = datePipe;
        this.sub = this.route.parent.params.subscribe(function (params) { _this.id = params['vmId']; console.log(params); });
        this.http = http;
    }
    VMHistoryComponent.prototype.convertDate = function (date) {
        return this.datePipe.transform((date * 1000), 'dd-MM-yyyy HH:mm:ss');
    };
    VMHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://192.168.0.165:3000/vms/audit', JSON.stringify({ uuid: this.id }), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.items = data; }, function (err) { return console.log("ERROR:", err); }, function () { return console.log('Complete'); });
    };
    return VMHistoryComponent;
}());
VMHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vmhistory',
        template: __webpack_require__("../../../../../src/app/vmhistory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vm.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]) === "function" && _c || Object])
], VMHistoryComponent);

var _a, _b, _c;
//# sourceMappingURL=vmhistory.component.js.map

/***/ }),

/***/ "../../../../../src/app/vmsettings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vm_panel > .panel-header {\r\n  padding: 0px;\r\n}\r\n.vm_panel > .panel-body{\r\n  padding: 0px;\r\n}\r\n.vm_panel > .panel-header > img {\r\n  width: 50%;\r\n}\r\n.vm_panel > .panel-footer {\r\n  text-align: center;\r\n  padding: 0px;\r\n}\r\n\r\n.vm-header-img{\r\n    max-width: 60%;\r\n}\r\n.vm-header{\r\n    padding: 10px;\r\n}\r\n.vm-header > h4 {\r\n    margin: 0px;\r\n}\r\n.vm-header > p {\r\n    margin: 0px;\r\n}\r\n\r\n.bootstrap-switch-label {\r\n  width: 51px !important;\r\n  background-color: #f4f;\r\n  \r\n}\r\n\r\nspan.bootstrap-switch-label {\r\n    width: 51px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vmsettings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-10\">\r\n            <h3>VM Settings</h3>\r\n        </div>\r\n        <div class=\"col-2 float-right\" style=\"padding-top:16px\">\r\n            <p>\r\n                <switch   (statusChange)=\"onFlagChange()\" [(status)]=\"vm.state\" [onText]=\"onText\" [offText]=\"offText\" [onColor]=\"onColor\" [offColor]=\"offColor\" [size]=\"size\" [disabled]=\"disabled\"></switch>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <legend>Details</legend>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-4 col-form-label\" style=\"text-align: right;\" for=\"widgetName\">VM name:</label>\r\n        <div class=\"col-4\">\r\n            <input  [(ngModel)]=\"vm.name\" class=\"form-control\" type=\"text\" name=\"name\">\r\n        </div>\r\n    </div>\r\n    <legend>Performance</legend>\r\n    <div class=\"form-group row\">\r\n          <label class=\"col-4 col-form-label\" style=\"text-align: right;\" for=\"selectbasic\">Cpu Cores:</label>\r\n          <div class=\"col-4\">\r\n              <div class=\"input-group number-spinner\">\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-default\" data-dir=\"dwn\" (click)=\"changeCores(-1)\"><span class=\"fa fa-minus\" aria-hidden=\"true\"></span></button>\r\n                  </span>\r\n                  <input type=\"text\" class=\"form-control text-center\" [(ngModel)]=\"vm.cores\" name=\"cores\">\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-default\" data-dir=\"up\" (click)=\"changeCores(1)\"><span class=\"fa fa-plus\" aria-hidden=\"true\"></span></button>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-4 col-form-label\" style=\"text-align: right;\" for=\"selectbasic\">Avalible Memory:</label>\r\n          <div class=\"col-4\">\r\n              <div class=\"input-group number-spinner\">\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-default\" data-dir=\"dwn\" (click)=\"changeMemory(-128)\"><span class=\"fa fa-minus\" aria-hidden=\"true\"></span></button>\r\n                  </span>\r\n                  <input type=\"text\" class=\"form-control text-center\" [(ngModel)]=\"vm.memory\" name=\"memory\">\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-default\" data-dir=\"up\" (click)=\"changeMemory(128)\"><span class=\"fa fa-plus\" aria-hidden=\"true\"></span></button>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <legend>Disk</legend>\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-4 col-form-label\" style=\"text-align: right;\" for=\"selectbasic\">Disk Size:</label>\r\n          <div class=\"col-4\">\r\n              <div class=\"input-group number-spinner\">\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-default\" (click)=\"changeDisk(-1)\"><span class=\"fa fa-minus\" aria-hidden=\"true\"></span></button>\r\n                  </span>\r\n                  <input type=\"text\" class=\"form-control text-center\" [(ngModel)]=\"vm.diskSize\" name=\"diskSize\">\r\n                  <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-default\"  (click)=\"changeDisk(1)\"><span class=\"fa fa-plus\" aria-hidden=\"true\"></span></button>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <!-- Text input-->\r\n      <div class=\"form-group row\">\r\n          <label class=\"col-4 col-form-label\" style=\"text-align: right;\" for=\"sensorId\">File Path:</label>\r\n          <div class=\"col-4\">\r\n              <input id=\"sensorId\" name=\"sensorId\" placeholder=\"A81758FFFE000000\" disabled class=\"form-control input-md\" type=\"text\" [(ngModel)]=\"vm.filepath\" name=\"filepath\">\r\n          </div>\r\n      </div>\r\n                <hr/>\r\n                <div class=\"form-group\">\r\n                        <div class=\"col-md-2 pull-right\" style=\"padding-top:16px\"><button class=\"btn btn-default btn-block\"> Cancel</button></div>\r\n                        <div class=\"col-md-2 pull-right\" style=\"padding-top:16px\"><button class=\"btn btn-danger btn-block\"> Delete</button></div>\r\n                        <div class=\"col-md-2 pull-right\" style=\"padding-top:16px\"><button class=\"btn btn-primary btn-block\" (click)=\"edit()\" >Edit</button></div>\r\n                </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vmsettings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vm_service__ = __webpack_require__("../../../../../src/app/vm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var VMSettingsComponent = (function () {
    function VMSettingsComponent(http, route, userService, datePipe) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.datePipe = datePipe;
        this.colors = ["blue", "default", "gray", "green", "red", "sky-blue", "yellow"];
        this.sizes = ["mini", "small", "normal", "large"];
        this.onText = "On";
        this.offText = "Off";
        this.onColor = "green";
        this.offColor = "red";
        this.size = "normal";
        this.disabled = false;
        this.value = true;
        this.vm = {
            name: "Test",
            state: false,
            cores: 0,
            memory: 0,
            diskSize: 0,
            filepath: "",
        };
        this.sub = this.route.parent.params.subscribe(function (params) { _this.id = params['vmId']; console.log(params); });
        this.http = http;
    }
    VMSettingsComponent.prototype.changeCores = function (amount) {
        console.log("hello", this.vm.cores, amount);
        this.vm.cores = this.vm.cores + amount;
    };
    VMSettingsComponent.prototype.changeMemory = function (amount) {
        console.log("hello", this.vm.memory, amount);
        this.vm.memory = this.vm.memory + amount;
    };
    VMSettingsComponent.prototype.changeDisk = function (amount) {
        console.log("hello", this.vm.diskSize, amount);
        this.vm.diskSize = this.vm.diskSize + amount;
    };
    VMSettingsComponent.prototype.onSubmitTemplateBased = function () {
        console.log(this.vm);
    };
    VMSettingsComponent.prototype.onFlagChange = function () {
        if (!this.vm.state) {
            console.log("START");
            this.vmPower("start");
        }
        else {
            console.log("STOP");
            this.vmPower("stop");
        }
    };
    VMSettingsComponent.prototype.vmPower = function (state) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://192.168.0.165:3000/vms/' + state, JSON.stringify({ uuid: this.id }), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.items = data; }, function (err) { return console.log("ERROR:", err); }, function () { return console.log('Complete'); });
    };
    VMSettingsComponent.prototype.update = function () {
        var _this = this;
        console.log('Complete');
        var item = this.items.filter(function (item) { return item.uuid == _this.id; })[0];
        this.vm.name = item.hostname;
        this.vm.cores = item.cores;
        this.vm.memory = (item.memory / (1024));
        this.vm.diskSize = Math.round(item.disks[0]["actual-size"] / (1024 * 1024 * 1024));
        this.vm.filepath = item.disks[0].filename;
        this.vm.state = item.state == "RUNNING";
    };
    VMSettingsComponent.prototype.edit = function () {
        console.log(this.vm);
    };
    VMSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.get('http://192.168.0.165:3000/vms/info').map(function (res) { return res.json(); }).subscribe(function (data) { return _this.items = data; }, function (err) { return console.log("ERROR:", err); }, function () { return _this.update(); });
    };
    return VMSettingsComponent;
}());
VMSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vmsettings',
        template: __webpack_require__("../../../../../src/app/vmsettings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vmsettings.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__vm_service__["a" /* VMService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__vm_service__["a" /* VMService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]) === "function" && _d || Object])
], VMSettingsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vmsettings.component.js.map

/***/ }),

/***/ "../../../../../src/app/vmusage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n        <div *ngIf=\"state == 'RUNNING'; else notStop\">\r\n            <h3><span class=\"label label-success pull-right\">Running</span></h3>\r\n        </div>\r\n        <ng-template #notStop>\r\n            <h3><span class=\"label label-primary pull-right\">{{state}}</span></h3>\r\n        </ng-template>\r\n    <br/>\r\n    <hr/>\r\n\r\n\r\n    <h3>CPU Usage </h3>\r\n    <div style=\"width:100%; height:300px\"> \r\n        <ngx-charts-line-chart\r\n            [scheme]=\"colorScheme\"\r\n            [results]=\"multi\"\r\n            [gradient]=\"gradient\"\r\n            [xAxis]=\"showXAxis\"\r\n            [yAxis]=\"showYAxis\"\r\n            [curve]=\"curve\"\r\n            [legend]=\"hideLegend\"\r\n            [showXAxisLabel]=\"showXAxisLabel\"\r\n            [showYAxisLabel]=\"showYAxisLabel\"\r\n            [xAxisLabel]=\"xAxisLabel\"\r\n            [yAxisLabel]=\"yAxisLabel\"\r\n            [autoScale]=\"autoScale\"\r\n            (select)=\"onSelect($event)\">\r\n        </ngx-charts-line-chart>\r\n    </div>\r\n\r\n       <hr/>\r\n    <h3>Memory Usage </h3>\r\n    <div style=\"width:100%; height:300px\"> \r\n        <ngx-charts-line-chart\r\n            [scheme]=\"colorScheme\"\r\n            [results]=\"multiMemory\"\r\n            [gradient]=\"gradient\"\r\n            [xAxis]=\"showXAxis\"\r\n            [yAxis]=\"showYAxis\"\r\n            [curve]=\"curve\"\r\n            [legend]=\"hideLegend\"\r\n            [showXAxisLabel]=\"showXAxisLabel\"\r\n            [showYAxisLabel]=\"showYAxisLabel\"\r\n            [xAxisLabel]=\"xAxisLabel\"\r\n            [yAxisLabel]=\"yAxisLabel\"\r\n            [autoScale]=\"autoScale\"\r\n            (select)=\"onSelect($event)\">\r\n        </ngx-charts-line-chart>\r\n    </div>\r\n    <hr/>\r\n    <!--\r\n    <h3>Disk Usage </h3>\r\n    <div style=\"width:100%; height:400px\"> \r\n        <ngx-charts-line-chart\r\n            [scheme]=\"colorScheme\"\r\n            [results]=\"multi\"\r\n            [gradient]=\"gradient\"\r\n            [xAxis]=\"showXAxis\"\r\n            [yAxis]=\"showYAxis\"\r\n            [curve]=\"curve\"\r\n            [legend]=\"hideLegend\"\r\n            [showXAxisLabel]=\"showXAxisLabel\"\r\n            [showYAxisLabel]=\"showYAxisLabel\"\r\n            [xAxisLabel]=\"xAxisLabel\"\r\n            [yAxisLabel]=\"yAxisLabel\"\r\n            [autoScale]=\"autoScale\"\r\n            (select)=\"onSelect($event)\">\r\n        </ngx-charts-line-chart>\r\n    </div>\r\n-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vmusage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vm_service__ = __webpack_require__("../../../../../src/app/vm.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMUsageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VMUsageComponent = (function () {
    function VMUsageComponent(route, userService, datePipe) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.datePipe = datePipe;
        this.multi = [
            {
                "name": "Load",
                "series": [],
            }
        ];
        this.multiMemory = [
            {
                "name": "FreeMemory",
                "series": [],
            }, {
                "name": "MaxMemory",
                "series": [],
            }
        ];
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Date';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Data (MB)';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // line, area
        this.autoScale = false;
        this.curve = __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveMonotoneX"];
        this.sub = this.route.parent.params.subscribe(function (params) { _this.id = params['vmId']; console.log(params); });
        for (var _i = 0; _i < 30; _i++) {
            this.multi[0].series.unshift({ "name": (this.datePipe.transform(Date.now() - (30 - (_i * 1000)), 'HH:mm:ss')), "value": 0 });
            this.multiMemory[0].series.unshift({ "name": (this.datePipe.transform(Date.now() - (30 - (_i * 1000)), 'HH:mm:ss')), "value": 0 });
            console.log(this.datePipe.transform(Date.now() - (30 - (_i * 1000)), 'HH:mm:ss'));
        }
        console.log(this.datePipe.transform(Date.now()), 'HH:mm:ss');
    }
    VMUsageComponent.prototype.add = function (x) {
        this.multi[0].series.unshift({ "name": (this.datePipe.transform(Date.now(), 'hh:mm:ss')), "value": (x.Load) });
        this.multi[0].series.length = this.multi[0].series.length < 30 ? this.multi[0].series.length : 30;
        this.multi = this.multi.slice();
    };
    VMUsageComponent.prototype.addFreeMemory = function (x) {
        this.multiMemory[0].series.unshift({ "name": (this.datePipe.transform(Date.now(), 'hh:mm:ss')), "value": (x.FreeMem / 1024) });
        this.multiMemory[0].series.length = this.multiMemory[0].series.length < 30 ? this.multiMemory[0].series.length : 30;
        this.multiMemory[1].series.unshift({ "name": (this.datePipe.transform(Date.now(), 'hh:mm:ss')), "value": (x.memory / 1024) });
        this.multiMemory[1].series.length = this.multiMemory[1].series.length < 30 ? this.multiMemory[1].series.length : 30;
        this.multiMemory = this.multiMemory.slice();
    };
    VMUsageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subcription = this.userService.pollTasks().subscribe(function (response) {
            _this.items = response;
            _this.item = _this.items.filter(function (item) { return item.uuid == _this.id; })[0];
            _this.state = _this.item.state;
            if (_this.item.state == "RUNNING") {
                _this.add(_this.item);
                _this.addFreeMemory(_this.item);
                console.log(_this.multi[0]);
            }
        });
    };
    VMUsageComponent.prototype.ngOnDestroy = function () {
        this.subcription.unsubscribe();
    };
    VMUsageComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    return VMUsageComponent;
}());
VMUsageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vmusage',
        template: __webpack_require__("../../../../../src/app/vmusage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vm.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__vm_service__["a" /* VMService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__vm_service__["a" /* VMService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]) === "function" && _c || Object])
], VMUsageComponent);

var _a, _b, _c;
//# sourceMappingURL=vmusage.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map