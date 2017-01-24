import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'
import { HttpProxy } from '../common/http.proxy'
import { User } from '../model/userModel'
import { HeaderModel } from '../model/headerModel'
import { ShareService } from '../service/share.service'
import { Cookie } from 'ng2-cookies/ng2-cookies'

@Injectable()
export class AccountService {
    constructor(private httpProxy: HttpProxy, private router: Router, private http: Http, private shareService: ShareService) { }

    login(userName: string, password: string) {
        let user = new User();
        user.UserName = userName;
        user.Password = password;
        this.httpProxy.post("account", user).subscribe(user => this.setTokenAndHeanderInfo(user))
    }

    setTokenAndHeanderInfo(user: User) {
        this.httpProxy.setHeader(user.Authorization);
        this.router.navigate(["/projects"]);
        let headerInfo = new HeaderModel(true, user.UserName);
        this.shareService.SetHeaderInfo(headerInfo);
        Cookie.set("HeaderInfo", JSON.stringify(headerInfo), 90);
    }
}