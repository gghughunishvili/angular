import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <ul>
      <li *ngFor="let employee of employees">{{ employee.firstname }} {{ employee.lastname }} ({{ employee.age }})</li>
    </ul>
  `,
  styles: [`
    ul li {
      font-weight: lite;
    }
  `]
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
