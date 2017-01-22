import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ProjectListComponent } from './bugManager/component/projectListComponent'
import { AddProjectComponent } from './bugManager/component/addProjectComponent'
import { EditProjectComponent } from './bugManager/component/editProjectComponent'
import { UserListComponent } from './bugManager/component/userListComponent'
import { TestComponent } from './bugManager/component/testComponent'
 import { LoginComponent } from './bugManager/component/loginComponent'

const routers: Routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'projects', component: ProjectListComponent },
    { path: 'addProject', component: AddProjectComponent },
    { path: 'editProject/:id', component: EditProjectComponent },
    { path: 'users', component: UserListComponent },
     { path: 'login', component: LoginComponent },
    { path: 'test', component: TestComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})

export class AppRoutingModule { }