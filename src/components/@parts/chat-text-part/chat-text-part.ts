import { Component,Input } from '@angular/core';

/**
 * Generated class for the ChatTextPartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-text-part',
  templateUrl: 'chat-text-part.html'
})
export class ChatTextPartComponent {
  @Input() me:boolean
  @Input() message:string
  constructor() {
  }

}
