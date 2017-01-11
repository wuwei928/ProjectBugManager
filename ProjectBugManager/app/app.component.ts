import { Component } from '@angular/core';
import { ShareService } from './bugManager/service/share.service'



@Component({
    moduleId: module.id,
    selector: 'layout',
    templateUrl: './bugManager/template/layout.Component.html'
})

export class AppComponent {
    constructor(private shareService: ShareService) { }
    isLoading = this.shareService.isLoading;
    pageTitle = this.shareService.pageTitle;
    ngOnInit(){
        //this.isLoading=false;
    }
}



