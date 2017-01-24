import { Headers, Http, Response, RequestOptions } from '@angular/http'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { ShareService } from '../service/share.service'
import { Cookie } from 'ng2-cookies/ng2-cookies'


@Injectable()
export class HttpProxy {
    private url = 'http://localhost:42833/api/';
    private headers = new Headers({ 'Content-Type': 'application/json' })
    options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http, private router: Router, private shareService: ShareService) { }

    get(action: string): Observable<any> {
        let actionUrl = this.setUrlAndToken(action);
        return this.http.get(actionUrl, this.options).map(res => res.json()).catch((error) => {
            return this.handleError(error)
        });
    }

    post(action: string, data: any): Observable<any> {
        let actionUrl = this.setUrlAndToken(action);
        return this.http.post(actionUrl, JSON.stringify(data), this.options).map(res => res.json()).catch((error) => this.handleError(error))
    }

    put(action: string, data: any): Observable<any> {
        let actionUrl = this.setUrlAndToken(action);
        return this.http.put(actionUrl, JSON.stringify(data), { headers: this.headers }).map(res => res.json()).catch((error) => this.handleError(error));
    }

    delete(action: string): Observable<any> {
        let actionUrl = this.setUrlAndToken(action);
        return this.http.delete(actionUrl, this.options).catch((error) => this.handleError(error));
    }

    setHeader(token: string) {
        this.headers.set("Authorization", "Basic " + token);
        Cookie.set("token", token, 1)
    }

    removeCookieAndAuthorization() {
        this.headers.delete("Authorization");
        Cookie.delete("token");
        Cookie.delete("HeaderInfo");
    }

    setUrlAndToken(action: string): string {
        this.headers.set("Authorization", "Basic " + Cookie.get("token"));
        return this.url + action;
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.Error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        if (error.status == 401) {
            this.router.navigate(["/login"]);
        } else {
            this.shareService.alertErrorMessage(errMsg);
        }

        return Observable.throw(errMsg);
    }
}
