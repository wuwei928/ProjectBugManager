import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core'
import { HeaderModel } from '../model/headerModel'

@Injectable()
export class ShareService {
    private _title = new BehaviorSubject<string>("");
    private _errorMessage = new BehaviorSubject("");
    private _isLoadingSource = new BehaviorSubject<boolean>(false);
    private _headerInfo = new BehaviorSubject<HeaderModel>(new HeaderModel(false, ""))
    setTitle = this._title.asObservable();
    isloading = this._isLoadingSource.asObservable();
    errorMessage = this._errorMessage.asObservable();
    headerInfo = this._headerInfo.asObservable();
    changeTitle(title) {
        this._title.next(title);
    }
    alertErrorMessage(message) {
        this._errorMessage.next(message);
    }
    SetHeaderInfo(header: HeaderModel) {
        this._headerInfo.next(header);
    }

    openLoading() {
        this._isLoadingSource.next(true);
    }
    clossLoading() {
        this._isLoadingSource.next(false);
    }

}

