import { Component, HostListener } from '@angular/core';
import { ShareService } from './bugManager/service/share.service'
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable'
import { HttpProxy } from './bugManager/common/http.proxy'
import { HeaderModel } from './bugManager/model/headerModel'
import { Cookie } from 'ng2-cookies/ng2-cookies'
import { Router } from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'body',
    templateUrl: './bugManager/template/layout.Component.html'
})
export class AppComponent {
    test: string;
    pageTitle: string;
    isLoading: boolean;
    errorMessage: string;
    headerModel = new HeaderModel(false, "");
    subscription: Subscription;
    loadingSubscription: Subscription;
    errorMessageSubscription: Subscription;
    setHeaderSubscription: Subscription;
    constructor(private shareService: ShareService, private httpProxy: HttpProxy, private router: Router) {

    }

    // @HostListener('window:unload', ['$event'])
    // unloadHandler(event) {
    //     this.test = "wuwei"
    //     this.httpProxy.removeCookieAndAuthorization();
    // }

    ngOnInit() {
        this.subscription = this.shareService.setTitle.subscribe(item => this.pageTitle = item);
        this.loadingSubscription = this.shareService.isloading.subscribe(loading => this.isLoading = loading);
        this.setHeaderSubscription = this.shareService.headerInfo.subscribe(header => this.setHeaderAndBody(header))
        this.errorMessageSubscription = this.shareService.errorMessage.subscribe(message => {
            this.errorMessage = message;
            setTimeout(() => {
                this.errorMessage = "";
            }, 10000);
        });

        if (Cookie.get("HeaderInfo")) {
            let header = JSON.parse(Cookie.get("HeaderInfo")) as HeaderModel;
            this.setHeaderAndBody(header);
        }
    }

    logout() {
        this.httpProxy.removeCookieAndAuthorization();
        this.router.navigate(["/login"]);
    }

    setHeaderAndBody(modelInfo: HeaderModel) {
        this.headerModel = modelInfo;
        let body = document.getElementsByTagName("body");
        if (modelInfo.IsShowHeader) {
            body[0].removeAttribute("class");
        } else {
            body[0].setAttribute("class", "login-backgroud");
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.loadingSubscription.unsubscribe();
        this.errorMessageSubscription.unsubscribe();
        this.setHeaderSubscription.unsubscribe();
    }
}
