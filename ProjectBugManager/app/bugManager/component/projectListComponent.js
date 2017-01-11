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
var common_1 = require("@angular/common");
var project_service_1 = require("../service/project.service");
var ProjectListComponent = (function () {
    function ProjectListComponent(projectService, location) {
        this.projectService = projectService;
        this.location = location;
        this.name = "";
    }
    ProjectListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService
            .getProjects()
            .then(function (projects) { return _this.backupProject(projects); });
    };
    ProjectListComponent.prototype.backupProject = function (projects) {
        this.projects = projects;
        this.backupProjects = projects;
    };
    ProjectListComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectListComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this.projectService.deleteProject(id).then(function () { return _this.getProjects(); });
    };
    ProjectListComponent.prototype.searchProject = function () {
        var _this = this;
        if (this.name.length != 0) {
            this.projects = this.projects.filter(function (project) { return _this.filterProject(project); });
        }
        else {
            this.projects = this.backupProjects;
        }
    };
    ProjectListComponent.prototype.filterProject = function (project) {
        return project.Name.indexOf(this.name) != -1;
    };
    return ProjectListComponent;
}());
ProjectListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'project-list',
        templateUrl: '../template/projectList.Component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        common_1.Location])
], ProjectListComponent);
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=projectListComponent.js.map