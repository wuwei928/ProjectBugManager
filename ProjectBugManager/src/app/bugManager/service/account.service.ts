import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'
import { HttpProxy } from '../common/http.proxy'
import { User } from '../model/userModel'

@Injectable()
export class AccountService {
    constructor(private httpProxy: HttpProxy, private router: Router, private http: Http) { }

    login(userName: string, password: string) {
        let user = new User();
        user.UserName = userName;
        user.Password = password;
        this.httpProxy.post("account", user).subscribe(user => this.setToken(user))

    }

    setToken(user: User) {
    　　this.httpProxy.setHeader(user.Authorization)
        this.router.navigate(["/users"])
    }
}