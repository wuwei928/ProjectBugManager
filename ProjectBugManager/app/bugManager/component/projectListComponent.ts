import { Component } from '@angular/core'
import { Location } from '@angular/common'

import { Project } from '../model/projectModel'
import { ProjectService } from '../service/project.service'

@Component({
    moduleId: module.id,
    selector: 'project-list',
    templateUrl: '../template/projectList.Component.html'
})

export class ProjectListComponent {
    projects: Project[];
    backupProjects: Project[];
    name = "";
    constructor(private projectService: ProjectService,
        private location: Location) { }

    getProjects(): void {
        this.projectService
            .getProjects()
            .then((projects) => this.backupProject(projects))
    }

    backupProject(projects) {
        this.projects = projects;
        this.backupProjects = projects
    }

    ngOnInit(): void {
        this.getProjects();
    }

    deleteProject(id: string) {
        this.projectService.deleteProject(id).then(() => this.getProjects())
    }


    searchProject() {
        if (this.name.length != 0) {
            this.projects = this.projects.filter((project: Project) => this.filterProject(project))
        }
        else {
            this.projects = this.backupProjects;
        }
    }

    filterProject(project) {
        return project.Name.indexOf(this.name) != -1
    }
}