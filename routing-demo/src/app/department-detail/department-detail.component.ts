import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <div class="container text-center">
      <h3>You have selected department with ID: {{ departmentId }}</h3>
      
      <div>
        <button (click)="showOverview()" class="btn btn-secondary">Overview</button>
        <button (click)="showContact()" class="btn btn-secondary">Contact</button>
      </div>

      <router-outlet></router-outlet>
      
      <button (click)="goPrevious()" class="btn btn-info">Previous</button>
      <button (click)="goNext()" class="btn btn-info">Next</button>
      
      <div id="go-back">
        <button (click)="gotoDepartments()" class="btn btn-warning">Back</button>
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
    // this.router.navigate(["/departments", prev]);
    this.router.navigate(['../', prev], {relativeTo: this.route});
  }
  goNext() {
    let next = this.departmentId + 1;
    // this.router.navigate(["/departments", next]);
    this.router.navigate(['../', next], {relativeTo: this.route});
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {"id": this.departmentId}]);
    this.router.navigate(['../', {"id": this.departmentId}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
