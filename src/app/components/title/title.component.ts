import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1><ng-content></ng-content></h1>
  `,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  constructor(){}

}
