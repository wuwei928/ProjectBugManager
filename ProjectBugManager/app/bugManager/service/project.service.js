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
var http_1 = require('@angular/http');
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.projectUrl = 'http://localhost:42833/api/projects';
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectUrl)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ProjectService.prototype.getProjectById = function (id) {
        var url = this.projectUrl + '/' + id;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (project) { return project.json(); });
    };
    ProjectService.prototype.deleteProject = function (id) {
        var url = this.projectUrl + '/' + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ProjectService.prototype.createProject = function (name, remark) {
        return this.http.post(this.projectUrl, JSON.stringify({ Name: name, Remark: remark }), { headers: this.headers })
            .toPromise()
            .then(function () { return name; })
            .catch(this.handleError);
    };
    ProjectService.prototype.updateProject = function (project) {
        return this.http.put(this.projectUrl, JSON.stringify(project), { headers: this.headers })
            .toPromise()
            .then(function () { return project; })
            .catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map