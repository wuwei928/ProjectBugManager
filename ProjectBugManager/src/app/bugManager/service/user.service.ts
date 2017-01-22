import { Injectable } from '@angular/core'
import { HttpProxy } from '../common/http.proxy'
import { Observable } from 'rxjs/Observable'

import { User } from '../model/userModel'

@Injectable()
export class UserService {
    constructor(private httpProxy: HttpProxy) { }
    getUserList(): Observable<User[]> {
        return this.httpProxy.get("users");
    }

    addUser(user: User): Observable<string> {
        return this.httpProxy.post("users", user);
    }

    getUser(id: string): Observable<User> {
        return this.httpProxy.get("users/" + id);
    }

    editUser(user: User): Observable<string> {
        return this.httpProxy.put("users", user);
    }
    deleteUser(id: string): Observable<string> {
        return this.httpProxy.delete("users/" + id);
    }
}