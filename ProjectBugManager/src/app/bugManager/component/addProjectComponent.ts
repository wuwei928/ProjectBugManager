import { Component } from '@angular/core'
import { Project } from '../model/projectModel'
import { Location } from '@angular/common'
import { Router } from '@angular/router'

import { ProjectService } from '../service/project.service'

@Component({
    moduleId: module.id,
    selector: 'project',
    templateUrl: '../template/project.Component.html'
})

export class AddProjectComponent {
    project: Project = {
        Id: "0",
        Name: "",
        Remark: ""
    };
    constructor(private projectService: ProjectService,
        private router: Router,
        private location: Location) { }
    onSubmit() {
        this.projectService.createProject(this.project).subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
        // this.router.navigate(['/projects']);
    }
    // get debug() { return JSON.stringify(this.project); }

    formError = {
        'Name': '',
        'Remark': ''
    }

    errorMessages = {
        'Name': {
            'required': 'Name is required.'
        },
        'Remark': {
            'required': 'password is required.'
        }
    }
}