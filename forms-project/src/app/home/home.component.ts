import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  langs = ['English', 'Spanish', 'Georgian', 'Other'];
  employee = new Employee('Emma', 'Watson');
  constructor() { }

  ngOnInit() {
  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.employee.firstname = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.employee.firstname = value;
    }
  }

}
