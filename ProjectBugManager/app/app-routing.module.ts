import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ProjectListComponent } from './bugManager/component/projectListComponent'
import { AddProjectComponent } from './bugManager/component/addProjectComponent'
import {EditProjectComponent} from './bugManager/component/editProjectComponent'


const routers: Routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'projects', component: ProjectListComponent },
    { path: 'addProject', component: AddProjectComponent },
    { path: 'editProject/:id', component: EditProjectComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})

export class AppRoutingModule { }