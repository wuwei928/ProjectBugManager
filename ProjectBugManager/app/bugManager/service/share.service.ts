// import { Observable } from 'rxjs/Observable'
// import { Observer } from 'rxjs/Observer'
import { Injectable } from '@angular/core'

@Injectable()
export class ShareService {
    public isLoading: boolean = false;
    public pageTitle: string = 'test';

    // private pageTitle = "";
    // _titleChange: Observable<string>;
    // private _observer: Observer<string>;

    // constructor() {
    //     this._titleChange = new Observable<string>(observer => this._observer = observer).share();
    // }

    // changeTitle(title) {
    //     this.changeTitle = title;
    //     this._observer.next(title);
    // }
    // setTitle() {
    //     return this.pageTitle;
    // }
}

