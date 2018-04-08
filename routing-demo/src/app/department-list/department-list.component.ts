import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <div class="container">
      <h4 class="text-center">
        Departments List!
      </h4>
      <ul class="list-group">
        <li (click)="onSelect(dep)" *ngFor="let dep of departments" class="list-group-item list-group-item-action hand">
          <span class="badge badge-info">{{ dep.id }}</span> {{ dep.name }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .hand {
      cursor: pointer;
    }
  `]
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "React"},
    {"id": 2, "name": "Angular"},
    {"id": 3, "name": "Vue"},
    {"id": 4, "name": "jQuery"},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(dep) {
    this.router.navigate(['/departments', dep.id]);
  }

}
