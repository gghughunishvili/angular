import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <div class="container">
      <h4 class="text-center">
        Departments List!
      </h4>
      <ul>
        <li *ngFor="let dep of departments">
          <span class="badge">{{ dep.id }}</span> {{ dep.name }}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "React"},
    {"id": 2, "name": "Angular"},
    {"id": 3, "name": "Vue"},
    {"id": 4, "name": "jQuery"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
