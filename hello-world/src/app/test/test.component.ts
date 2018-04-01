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
  
  public isSpecial = true;
  public hasError = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-error" : this.hasError,
    "text-special" : this.isSpecial,
  };

  public highlightColor = "purple";
  public messageStyles = {
    fontWeight: "bold",
    color: "blue"
  };
  
  public greeting = "";
  
  public siteUrl = window.location.href;
  
  constructor() { }

  ngOnInit() {
  }

  greetUser = () => {
    return "Hello " + this.name;
  }

  onBtnClick = (event) => {
    alert("Hello there");
    console.log(event);
    this.greeting = "Greeting btn has been clicked!";
  }

  logMessage = (message) => {
    console.log(message);
  }

}
