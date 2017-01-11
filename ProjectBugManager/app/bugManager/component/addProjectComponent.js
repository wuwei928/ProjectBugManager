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
var core_1 = require("@angular/core");
var projectModel_1 = require("../model/projectModel");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var project_service_1 = require("../service/project.service");
var AddProjectComponent = (function () {
    function AddProjectComponent(projectService, router, location) {
        this.projectService = projectService;
        this.router = router;
        this.location = location;
        this.project = new projectModel_1.Project('', 'wu', 'wei');
    }
    AddProjectComponent.prototype.onSubmit = function () {
        var _this = this;
        this.projectService.createProject(this.project.Name, this.project.Remark).then(function () { return _this.goBack(); });
    };
    AddProjectComponent.prototype.goBack = function () {
        this.location.back();
        // this.router.navigate(['/projects']);
    };
    return AddProjectComponent;
}());
AddProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'project',
        templateUrl: '../template/project.Component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        router_1.Router,
        common_1.Location])
], AddProjectComponent);
exports.AddProjectComponent = AddProjectComponent;
//# sourceMappingURL=addProjectComponent.js.map