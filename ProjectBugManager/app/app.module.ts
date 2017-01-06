import './rxjs-operators';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectListComponent } from './bugManager/component/projectListComponent'
import { AddProjectComponent } from './bugManager/component/addProjectComponent'
import { EditProjectComponent } from './bugManager/component/editProjectComponent'

import { ProjectService } from './bugManager/service/project.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [ProjectListComponent, AppComponent, AddProjectComponent, EditProjectComponent],
    providers: [ProjectService],
    bootstrap: [AppComponent]
})

export class AppModule { }