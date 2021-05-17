import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>{{ pageTitle }}</div>`,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
