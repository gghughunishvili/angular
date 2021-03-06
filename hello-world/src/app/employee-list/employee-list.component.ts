import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h3>{{ errorMessage }}</h3>
    <ul>
      <li *ngFor="let employee of employees">{{ employee.firstname }}</li>
    </ul>
  `,
  styles: [`
    ul li{
      font-style: italic;
    }
  `]
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMessage = "";
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMessage = error);
  }

}
