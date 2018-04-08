import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <div class="container">
      <h4 class="text-center">
        Departments List!
      </h4>
      <ul class="list-group">
        <li 
          (click)="onSelect(dep)" 
          *ngFor="let dep of departments" 
          class="list-group-item list-group-item-action hand"
          [class.selected]="isSelected(dep)">
          <span class="badge badge-info">{{ dep.id }}</span> {{ dep.name }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .hand {
      cursor: pointer;
    }

    .selected {
      background: #ccc;
    }
  `]
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  public departments = [
    {"id": 1, "name": "React"},
    {"id": 2, "name": "Angular"},
    {"id": 3, "name": "Vue"},
    {"id": 4, "name": "jQuery"},
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(dep) {
    this.router.navigate(['/departments', dep.id]);
  }

  isSelected(department) {
    return this.selectedId == department.id;
  }

}
