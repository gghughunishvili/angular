import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPost } from '../services/form-post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  langs = [];
  employee = new Employee('', '', false, 'w2', 'default');
  hasPrimaryLanguageError = false;
  
  constructor(private formPost: FormPost) {
    this.formPost.getLanguages().subscribe(
      data => this.langs = data.languages,
      err => console.log(err)
    );
  }

  ngOnInit() {
    
  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.employee.firstname = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.employee.firstname = value;
    }
  }

  validatePrimaryLanguage(value) {
    this.hasPrimaryLanguageError = value === 'default';
  }

  submitForm(form: NgForm) {
    // Validate form
    this.validatePrimaryLanguage(this.employee.primaryLanguage);
    if (this.hasPrimaryLanguageError)
      return;
      
    this.formPost.postEmployee(this.employee)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

}
