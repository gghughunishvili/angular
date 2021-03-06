import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  
  public displaySecret = false;
  public color;
  public names = ["Jason", "David", "Jenny", "Jane", "Kate", "Tom"];

  constructor() { }

  ngOnInit() { }

  revealSecret = () => {
    this.displaySecret = !this.displaySecret;
  }

  submitColor = (color) => {
    this.color = color.toLowerCase();
  }

}
