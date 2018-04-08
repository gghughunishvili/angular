import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      Page not found. Try again different route!
    </p>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
