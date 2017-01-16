import { Component } from '@angular/core';
import { ShareService } from './bugManager/service/share.service'



@Component({
    moduleId: module.id,
    selector: 'layout',
    templateUrl: './bugManager/template/layout.Component.html'
})

export class AppComponent {
    // pageTitle: string;
    // subscription: any;
    constructor(private shareService: ShareService) { }
    isLoading = this.shareService.isLoading;
    pageTitle = this.shareService.pageTitle;
    // ngOnInit() {
    //     this.pageTitle = this.shareService.setTitle();
    //     this.subscription = this.shareService._titleChange.subscribe(
    //         item => this.pageTitle = item);
    // }

    // ngOnDestroy(){
    //     this.subscription.unsubscribe();
    // }

}



