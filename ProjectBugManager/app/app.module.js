"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('./vendor');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var highlight_1 = require('./bugManager/direactive/highlight');
var projectListComponent_1 = require('./bugManager/component/projectListComponent');
var addProjectComponent_1 = require('./bugManager/component/addProjectComponent');
var editProjectComponent_1 = require('./bugManager/component/editProjectComponent');
var userListComponent_1 = require('./bugManager/component/user/userListComponent');
var testComponent_1 = require('./bugManager/component/testComponent');
var project_service_1 = require('./bugManager/service/project.service');
var share_service_1 = require('./bugManager/service/share.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                ng2_bootstrap_1.ModalModule.forRoot()
            ],
            declarations: [projectListComponent_1.ProjectListComponent, app_component_1.AppComponent,
                addProjectComponent_1.AddProjectComponent, editProjectComponent_1.EditProjectComponent,
                userListComponent_1.UserListComponent, highlight_1.HighLightDirective, testComponent_1.TestComponent],
            providers: [project_service_1.ProjectService, share_service_1.ShareService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map