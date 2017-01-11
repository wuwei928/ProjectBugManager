import './vendor';
import { Observable } from 'rxjs'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ng2-bootstrap'

import { ProjectListComponent } from './bugManager/component/projectListComponent'
import { AddProjectComponent } from './bugManager/component/addProjectComponent'
import { EditProjectComponent } from './bugManager/component/editProjectComponent'

import { ProjectService } from './bugManager/service/project.service'
import { ShareService } from './bugManager/service/share.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [ProjectListComponent, AppComponent, AddProjectComponent, EditProjectComponent],
    providers: [ProjectService, ShareService],
    bootstrap: [AppComponent]
})

export class AppModule { }