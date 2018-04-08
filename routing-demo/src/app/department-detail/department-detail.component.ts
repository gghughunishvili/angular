import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p class="container text-center">
      You have selected department with ID: {{ departmentId }}
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  
  constructor(private route: ActivatedRoute) { }
 
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
