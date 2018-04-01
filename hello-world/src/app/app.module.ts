import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestClassComponent } from './test-class/test-class.component';
import { TestHyphenComponent } from './test-hyphen/test-hyphen.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestClassComponent,
    TestHyphenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
