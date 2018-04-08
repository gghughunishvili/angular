import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <div class="container text-center">
      <h3>You have selected department with ID: {{ departmentId }}</h3>
      <a (click)="goPrevious()" class="btn btn-info">Previous</a>
      <a (click)="goNext()" class="btn btn-info">Next</a>
      
      <div id="go-back">
        <a (click)="gotoDepartments()" class="btn btn-warning">Back</a>
      </div>
    </div>
  `,
  styles: [`
    #go-back {
      margin-top: 20px;
    }
  `]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  
  constructor(private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let prev = this.departmentId - 1;
    this.router.navigate(["/departments", prev]);
  }
  goNext() {
    let next = this.departmentId + 1;
    this.router.navigate(["/departments", next]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {"id": this.departmentId}]);
  }
}
