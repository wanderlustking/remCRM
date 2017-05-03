webpackJsonp([3,17],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_routing_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__charts_routing_module__["a" /* ChartsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["a" /* PageHeaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__charts_component__["a" /* ChartsComponent */]]
    })
], ChartsModule);

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('push-right');
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(226),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__(214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(227),
        styles: [__webpack_require__(223)]
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_shared_pipes_module__ = __webpack_require__(221);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__(216);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__modules__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__modules__["b"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__ = __webpack_require__(220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__ = __webpack_require__(218);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
    }
    return PageHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "heading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "icon", void 0);
PageHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__(228),
        styles: [__webpack_require__(224)]
    })
], PageHeaderComponent);

//# sourceMappingURL=page-header.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_header_component__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = (function () {
    function PageHeaderModule() {
    }
    return PageHeaderModule;
}());
PageHeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]]
    })
], PageHeaderModule);

//# sourceMappingURL=page-header.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatComponent = (function () {
    function StatComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    return StatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "bgClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StatComponent.prototype, "event", void 0);
StatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stat',
        template: __webpack_require__(229),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], StatComponent);

var _a;
//# sourceMappingURL=stat.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_component__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = (function () {
    function StatModule() {
    }
    return StatModule;
}());
StatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]]
    })
], StatModule);

//# sourceMappingURL=stat.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* unused harmony export SharedPipesModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedPipesModule = (function () {
    function SharedPipesModule() {
    }
    return SharedPipesModule;
}());
SharedPipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */]
        ],
        declarations: []
    })
], SharedPipesModule);

//# sourceMappingURL=shared-pipes.module.js.map

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".topnav {\n  border-radius: 0;\n  background-color: #222;\n  padding: 6px;\n  z-index: 2; }\n  .topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n  .topnav .top-right-nav .buy-now a {\n    color: #999; }\n  .topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n\n.messages {\n  width: 300px; }\n  .messages .media {\n    border-bottom: 1px solid #DDD;\n    padding: 5px 10px; }\n    .messages .media:last-child {\n      border-bottom: none; }\n  .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  .messages .media-body .small {\n    margin: 0; }\n  .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.header .navbar {\n  background: #222 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 55px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n    .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n      .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: .75rem 1.5rem;\n        padding-top: 1rem; }\n    .sidebar .sidebar-dropdown .panel-title a:hover, .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #FFF; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n\n.nested-menu .list-group-item {\n  cursor: pointer; }\n\n.nested-menu .nested {\n  list-style-type: none; }\n\n.nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #FFF;\n    padding: 10px;\n    display: block; }\n\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div class=\"pos-f-t fixed-top header\">\r\n    <nav class=\"navbar navbar-inverse bg-inverse navbar-toggleable-md\">\r\n        <button class=\"navbar-toggler navbar-toggler-right\" (click)=\"toggleSidebar()\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">SB Admin BS 4 Angular4</a>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\r\n            <form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n            </form>\r\n            <ul class=\"navbar-nav ml-auto mt-2 mt-md-0\">\r\n                <li class=\"nav-item\">\r\n                    <a href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip\" class=\"nav-link btn mt-1\" role=\"button\" style=\"padding: .375rem 1rem !important; border-color: #999;\">Download Now</a>\r\n                </li> &nbsp;\r\n                <li class=\"nav-item\">\r\n                    <a href=\"javascript:void(0)\" class=\"nav-link mt-1\" style=\"padding: 0.375rem 1rem !important; border-color: #999;\" (click)=\"rltAndLtr()\">RTL/LTR</a>\r\n                </li> &nbsp;\r\n                <li class=\"dropdown nav-item\" ngbDropdown>\r\n                    <!-- <div class=\"dropdown\"> -->\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n                        <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu dropdown-menu-right messages\">\r\n                        <li class=\"media\">\r\n                            <img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\">\r\n                            <div class=\"media-body\">\r\n                                <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                                <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                                <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"media\">\r\n                            <img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\">\r\n                            <div class=\"media-body\">\r\n                                <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                                <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                                <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"media\">\r\n                            <img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\">\r\n                            <div class=\"media-body\">\r\n                                <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                                <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                                <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li ngbDropdown class=\"nav-item dropdown\">\r\n                    <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                        <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">Pending Task <span class=\"badge badge-info\">6</span></a>\r\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">In queue <span class=\"badge badge-info\"> 13</span></a>\r\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">Mail <span class=\"badge badge-info\"> 45</span></a>\r\n                        <li class=\"dropdown-divider\"></li>\r\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">View All</a>\r\n                    </ul>\r\n                </li>\r\n                <div class=\"nav-item dropdown\" ngbDropdown>\r\n                    <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                        <i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                        <a class=\"dropdown-item\" href=\"jvascript:void(0)\"><i class=\"fa fa-fw fa-user\"></i> Profile</a>\r\n                        <a class=\"dropdown-item\" href=\"jvascript:void(0)\"><i class=\"fa fa-fw fa-envelope\"></i> Inbox</a>\r\n                        <a class=\"dropdown-item\" href=\"jvascript:void(0)\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/login']\"><i class=\"fa fa-fw fa-power-off\"></i> Log Out</a>\r\n                    </div>\r\n                </div>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>\r\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\r\n    <ul class=\"list-group\">\r\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;Dashboard\r\n        </a>\r\n        <a [routerLink]=\"['/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;Charts\r\n        </a>\r\n        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;Tables\r\n        </a>\r\n        <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;Forms\r\n        </a>\r\n        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;Bootstrap Elements\r\n        </a>\r\n        <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;Bootstrap Grid\r\n        </a>\r\n        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-th-list\"></i>&nbsp;Component\r\n        </a>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\r\n                <span><i class=\"fa fa-plus\"></i> &nbsp; Menu</span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span>Submenu</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span>Submenu</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span>Submenu</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </div>\r\n        <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-file-o\"></i>&nbsp;BlankPage\r\n        </a>\r\n        <a class=\"list-group-item more-themes\" href=\"http://www.strapui.com/\" >\r\n            More Themes\r\n        </a>\r\n    </ul>\r\n</nav>\r\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <h2 class=\"page-header\">\r\n            {{heading}}\r\n        </h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\r\n        </ol>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse {{bgClass}}\">\r\n    <div class=\"card-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col col-xs-3\">\r\n                <i class=\"fa {{icon}} fa-5x\"></i>\r\n            </div>\r\n            <div class=\"col col-xs-9 text-right\">\r\n                <div class=\"d-block huge\">{{count}}</div>\r\n                <div class=\"d-block\">{{label}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <span class=\"float-left\">View Details {{data}}</span>\r\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\r\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartsComponent = (function () {
    function ChartsComponent() {
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    ChartsComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    ChartsComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    ChartsComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
        * (My guess), for Angular to recognize the change in the dataset
        * it has to change the dataset variable directly,
        * so one way around it, is to clone the data, change it and then
        * assign it;
        */
    };
    ChartsComponent.prototype.ngOnInit = function () { };
    return ChartsComponent;
}());
ChartsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-charts',
        template: __webpack_require__(385),
        styles: [__webpack_require__(356)]
    }),
    __metadata("design:paramtypes", [])
], ChartsComponent);

//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_component__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__charts_component__["a" /* ChartsComponent */] }
];
var ChartsRoutingModule = (function () {
    function ChartsRoutingModule() {
    }
    return ChartsRoutingModule;
}());
ChartsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ChartsRoutingModule);

//# sourceMappingURL=charts-routing.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(5);
/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        if (typeof Chart === 'undefined') {
            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
        }
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    BaseChartDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'canvas[baseChart]', exportAs: 'base-chart' },] },
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    BaseChartDirective.propDecorators = {
        'data': [{ type: core_1.Input },],
        'datasets': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'chartType': [{ type: core_1.Input },],
        'colors': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'chartClick': [{ type: core_1.Output },],
        'chartHover': [{ type: core_1.Output },],
    };
    return BaseChartDirective;
}());
exports.BaseChartDirective = BaseChartDirective;
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        BaseChartDirective
                    ],
                    exports: [
                        BaseChartDirective
                    ],
                    imports: []
                },] },
    ];
    /** @nocollapse */
    ChartsModule.ctorParameters = function () { return []; };
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(368));


/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Charts'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n<div class=\"row\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">\r\n                Bar Chart\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\r\n                </canvas>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">Update</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">\r\n                Doughnut Chart\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <canvas baseChart height=\"180px\" [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">\r\n                Radar Chart\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <canvas baseChart height=\"150px\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">\r\n                Pie Chart\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <canvas baseChart height=\"150px\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">\r\n                Polar Area Chart\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <canvas baseChart height=\"130px\" [data]=\"polarAreaChartData\" [labels]=\"polarAreaChartLabels\" [legend]=\"polarAreaLegend\" [chartType]=\"polarAreaChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">\r\n                Line Chart\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <canvas baseChart height=\"130\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=3.chunk.js.map