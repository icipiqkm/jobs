import { Component } from '@angular/core';

/**
 * Generated class for the ChatPartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-part',
  templateUrl: 'chat-part.html'
})
export class ChatPartComponent {

  text: string;

  constructor() {
    console.log('Hello ChatPartComponent Component');
    this.text = 'Hello World';
  }

}
