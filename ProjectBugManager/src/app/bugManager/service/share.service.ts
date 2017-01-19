import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core'

@Injectable()
export class ShareService {
    private _navItemSource = new BehaviorSubject<string>("");
    private _isLoadingSource = new BehaviorSubject<boolean>(false);
    navItem$ = this._navItemSource.asObservable();
    isloading = this._isLoadingSource.asObservable();
    changeTitle(title) {
        this._navItemSource.next(title);
    }

    openLoading() {
        this._isLoadingSource.next(true);
    }
    clossLoading() {
        this._isLoadingSource.next(false);
    }

}

