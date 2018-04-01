import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  constructor() { }

  getEmployees = () => {
    return [
      {firstname: "Jason", lastname: "Angular", age:8},
      {firstname: "John", lastname: "Doe", age:33},
      {firstname: "Jane", lastname: "Doe", age:31},
      {firstname: "Jenny", lastname: "Lopes", age:38}
    ];
  }
}
