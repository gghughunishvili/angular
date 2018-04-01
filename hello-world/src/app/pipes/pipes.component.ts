import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public title = "Welcome to Gio's world!";
  public jsonObject = {
    firstname: "Jason",
    lastname: "Downy",
    age: 26,
    country: "Unknown"
  };
  public number = 23.1456;
  public date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
