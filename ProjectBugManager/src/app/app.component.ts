import { Component } from '@angular/core';
import { ShareService } from './bugManager/service/share.service'
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable'

@Component({
    moduleId: module.id,
    selector: 'layout',
    templateUrl: './bugManager/template/layout.Component.html'
})
export class AppComponent {
    pageTitle: string;
    isLoading: boolean;
    errorMessage: string;
    subscription: Subscription;
    loadingSubscription: Subscription;
    errorMessageSubscription: Subscription;
    constructor(private shareService: ShareService) { }

    ngOnInit() {
        this.subscription = this.shareService.navItem$.subscribe(item => this.pageTitle = item);
        this.loadingSubscription = this.shareService.isloading.subscribe(loading => this.isLoading = loading);
        this.errorMessageSubscription = this.shareService.errorMessage.subscribe(message => {
            this.errorMessage = message;
            setTimeout(() => {
                this.errorMessage = "";
            }, 10000);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.loadingSubscription.unsubscribe();

    }
}
