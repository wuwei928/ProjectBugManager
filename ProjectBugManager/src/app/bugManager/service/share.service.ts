import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core'

@Injectable()
export class ShareService {
    private _navItemSource = new BehaviorSubject<string>("");
    private _errorMessage = new BehaviorSubject("");
    private _isLoadingSource = new BehaviorSubject<boolean>(false);
    navItem$ = this._navItemSource.asObservable();
    isloading = this._isLoadingSource.asObservable();
    errorMessage = this._errorMessage.asObservable();
    changeTitle(title) {
        this._navItemSource.next(title);
    }
    alertErrorMessage(message) {
        this._errorMessage.next(message);
    }

    openLoading() {
        this._isLoadingSource.next(true);
    }
    clossLoading() {
        this._isLoadingSource.next(false);
    }

}

