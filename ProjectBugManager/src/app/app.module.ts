import './vendor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule, AlertModule, DropdownModule } from 'ng2-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighLightDirective } from './bugManager/directive/highlight'

import { ProjectListComponent } from './bugManager/component/projectListComponent'
import { AddProjectComponent } from './bugManager/component/addProjectComponent'
import { EditProjectComponent } from './bugManager/component/editProjectComponent'
import { UserListComponent } from './bugManager/component/userListComponent'
import { TestComponent } from './bugManager/component/testComponent'
import { ValidateComponent } from './bugManager/component/fromValidateComponent'
import { LoginComponent } from './bugManager/component/loginComponent'

import { ProjectService } from './bugManager/service/project.service'
import { ShareService } from './bugManager/service/share.service'
import { UserService } from './bugManager/service/user.service'
import { HttpProxy } from './bugManager/common/http.proxy'
import { AccountService } from './bugManager/service/account.service'

import { EmailValidatorDirective } from './bugManager/directive/emailValidateDirective'
import { ForbiddenValidatorDirective } from './bugManager/directive/customValidateDirective'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        AlertModule.forRoot(),
        DropdownModule.forRoot()
    ],
    declarations: [ProjectListComponent, AppComponent,
        AddProjectComponent, EditProjectComponent, LoginComponent, EmailValidatorDirective,ForbiddenValidatorDirective,
        ValidateComponent,UserListComponent, HighLightDirective, TestComponent],
    providers: [ProjectService, ShareService, UserService, HttpProxy, AccountService],
    bootstrap: [AppComponent]
})

export class AppModule { }