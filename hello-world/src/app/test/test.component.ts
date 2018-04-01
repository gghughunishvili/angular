import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // @Input() public parentData; // One way to get parentData
  @Input('parentData') public description;
  
  @Output() public childEvent = new EventEmitter();

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

  fireEvent = () => {
    console.log("here");
    this.childEvent.emit("This data was sent from child component event!");
  }

}
