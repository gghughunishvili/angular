import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `<h2>Hello {{ title }}</h2>`
})
export class EventsAppComponent {
  title = 'events app';
}
