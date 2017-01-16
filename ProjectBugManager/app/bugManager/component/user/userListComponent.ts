import { Component } from '@angular/core'

import { Location } from '@angular/common'

import { Project } from '../../model/projectModel'
import { ProjectService } from '../../service/project.service'
import { ShareService } from '../../service/share.service'

@Component({
    moduleId: module.id,
    selector: 'userList',
    templateUrl: '../../template/UserList.Component.html'
})

export class UserListComponent {
    projects: Project[];
    backupProjects: Project[];
    name = "";
    constructor(private projectService: ProjectService, private shareService: ShareService,
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

    ngAfterViewChecked() {
        // this.shareService.changeTitle("UserList");
        this.shareService.pageTitle="Test";
    }
}