import { Component } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { Project } from '../model/projectModel'
import { ProjectService } from '../service/project.service'


@Component({
    moduleId: module.id,
    selector: 'editproject',
    templateUrl: '../template/project.Component.html'
})

export class EditProjectComponent {
    project = new Project();
    constructor(private projectService: ProjectService,
        private router: ActivatedRoute,
        private location: Location) { }
    ngOnInit(): void {

        this.router.params.switchMap((params: Params) => this.projectService.getProjectById(params['id']))
            .subscribe(project => this.project = project)

        // let id = this.router.snapshot.params['id'];
        // this.projectService.getProjectById(id).then(project => this.project = project);
    }
    onSubmit() {
        this.projectService.updateProject(this.project).subscribe(() => this.goBack())
    }
    goBack() {
        this.location.back();
    }
}