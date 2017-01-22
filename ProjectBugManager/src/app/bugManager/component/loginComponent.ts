import { Component } from '@angular/core'
import { AccountService } from '../service/account.service'



@Component({
    moduleId: module.id,
    selector: "login-page",
    templateUrl: "../template/loginPage.Component.html"
})

export class LoginComponent {
    UserName: string;
    Password: string;
    constructor(private accountService: AccountService) { }
    login() {
        this.accountService.login(this.UserName, this.Password);
    }
}