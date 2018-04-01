import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestClassComponent } from './test-class/test-class.component';
import { TestHyphenComponent } from './test-hyphen/test-hyphen.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestClassComponent,
    TestHyphenComponent,
    DirectivesComponent,
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
