import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs/Observable";

import "rxjs/Rx";

@Injectable()
export class FormPost {
    constructor(private http: Http) {}

    private extractData(res: Response) {
        let body = res.json();
        return body.fields || {};
    }

    private extractLanguages(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.statusText);
    }

    getLanguages(): Observable<any> {

        return this.http.get('http://localhost:3100/languages')
            .delay(5000)
            .map(this.extractLanguages)
            .catch(this.handleError);
    }

    postEmployee(employee: Employee): Observable<any> {
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type' : 'applicaiton/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3100/employee', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}