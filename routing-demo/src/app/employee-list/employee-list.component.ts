import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <div class="container">  
      <h4 class="text-center">
        Employees List!
      </h4>
      <p>The list works</p>
    </div>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
