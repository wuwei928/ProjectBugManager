import { Component } from '@angular/core';
import { ShareService } from './bugManager/service/share.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'layout',
    templateUrl: './bugManager/template/layout.Component.html'
})
export class AppComponent {
    pageTitle: string;
    isLoading: boolean;
    subscription: Subscription;
    loadingSubscription: Subscription;
    constructor(private shareService: ShareService) { }

    ngOnInit() {
        this.subscription = this.shareService.navItem$.subscribe(item => this.pageTitle = item);
        this.loadingSubscription = this.shareService.isloading.subscribe(loading => this.isLoading = loading);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
