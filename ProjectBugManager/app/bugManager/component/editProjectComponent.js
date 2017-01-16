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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var projectModel_1 = require('../model/projectModel');
var project_service_1 = require('../service/project.service');
var EditProjectComponent = (function () {
    function EditProjectComponent(projectService, router, location) {
        this.projectService = projectService;
        this.router = router;
        this.location = location;
        this.project = new projectModel_1.Project('', '', '');
    }
    EditProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.switchMap(function (params) { return _this.projectService.getProjectById(params['id']); })
            .subscribe(function (project) { return _this.project = project; });
        // let id = this.router.snapshot.params['id'];
        // this.projectService.getProjectById(id).then(project => this.project = project);
    };
    EditProjectComponent.prototype.onSubmit = function () {
        var _this = this;
        this.projectService.updateProject(this.project).then(function () { return _this.goBack(); });
    };
    EditProjectComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditProjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editproject',
            templateUrl: '../template/project.Component.html'
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.ActivatedRoute, common_1.Location])
    ], EditProjectComponent);
    return EditProjectComponent;
}());
exports.EditProjectComponent = EditProjectComponent;
//# sourceMappingURL=editProjectComponent.js.map