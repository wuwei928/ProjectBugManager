import './vendor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule,AlertModule } from 'ng2-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighLightDirective } from './bugManager/direactive/highlight'

import { ProjectListComponent } from './bugManager/component/projectListComponent'
import { AddProjectComponent } from './bugManager/component/addProjectComponent'
import { EditProjectComponent } from './bugManager/component/editProjectComponent'
import { UserListComponent } from './bugManager/component/userListComponent'
import { TestComponent } from './bugManager/component/testComponent'

import { ProjectService } from './bugManager/service/project.service'
import { ShareService } from './bugManager/service/share.service'
import { UserService } from './bugManager/service/user.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        AlertModule.forRoot()
    ],
    declarations: [ProjectListComponent, AppComponent,
        AddProjectComponent, EditProjectComponent,
        UserListComponent, HighLightDirective, TestComponent],
    providers: [ProjectService, ShareService, UserService],
    bootstrap: [AppComponent]
})

export class AppModule { }