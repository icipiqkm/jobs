import { Component } from '@angular/core';

/**
 * Generated class for the JobMsgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'job-msg', 
  templateUrl: 'job-msg.html'
})
export class JobMsgComponent {

  text: string;

  constructor() {
    console.log('Hello JobMsgComponent Component');
    this.text = 'Hello World';
  }

}
