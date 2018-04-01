import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Giorgi";
  public myId = "testID";
  public isDisabled = true;

  public siteUrl = window.location.href;
  
  constructor() { }

  ngOnInit() {
  }

  greetUser = () => {
    return "Hello " + this.name;
  }

}
