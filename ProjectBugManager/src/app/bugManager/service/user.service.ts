import { Injectable } from '@angular/core'
import { Headers, Http, Response, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { User } from '../model/userModel'

@Injectable()
export class UserService {
    private url = 'http://localhost:42833/api/users';
    private headers = new Headers({ 'Content-Type': 'application/json' })
    options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http) { }
    getUserList(): Observable<User[]> {
        return this.http.get(this.url, this.options).map(this.extractUsers);
    }
    extractUsers(res: Response) {
        return res.json();
    }

    addUser(user: User): Observable<string> {
        return this.http.post(this.url, JSON.stringify(user), this.options).catch(this.handleError)
    }

    getUser(id: string): Observable<User> {
        let geturl = this.url + "/" + id;
        return this.http.get(geturl, this.options).map(res => res.json()).catch(this.handleError);
    }

    editUser(user: User): Observable<string> {
        return this.http.put(this.url, JSON.stringify(user), { headers: this.headers }).catch(this.handleError);
    }
    deleteUser(id: string): Observable<string> {
        let geturl = this.url + "/" + id;
        return this.http.delete(geturl, this.options).map(() => null).catch(this.handleError);
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