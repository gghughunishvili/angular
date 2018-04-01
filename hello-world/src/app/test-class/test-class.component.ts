import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test-class',
  template: `
    <div> Inline code in app-test-class </div>
  `,
  styles: [`
    div {
      color: red;
    }
  `]
})
export class TestClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
