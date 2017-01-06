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
    project = new Project('', 'wu', 'wei');
    constructor(private projectService: ProjectService, 
    private router:Router,
    private location: Location) { }
    onSubmit() {
        this.projectService.createProject(this.project.Name, this.project.Remark).then(()=>this.goBack());
    }
    goBack() {
         this.location.back();
        // this.router.navigate(['/projects']);
    }
    // get debug() { return JSON.stringify(this.project); }
}