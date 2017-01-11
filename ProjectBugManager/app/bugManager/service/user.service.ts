import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import { Observable } from 'rxjs'

import { User } from '../model/UserModel'

@Injectable()
export class UserService {
    private url = 'http://localhost:42833/api/users';
    private headers = new Headers({ 'Content-Type': 'applaction/json' })
    constructor(private http: Http) { }
    getUserList(): Observable<User[]> {
        return this.http.get(this.url).map(this.extractUsers).catch(this.handleError);
    }
    extractUsers(res: Response) {
        return res;
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}