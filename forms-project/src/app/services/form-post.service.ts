import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Employee } from "../models/employee.model";

@Injectable()
export class FormPost {
    constructor(private http: Http) {}

    postEmployee(employee: Employee) {
        console.log(employee);
    }
}