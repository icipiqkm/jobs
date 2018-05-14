import { Component,Input } from '@angular/core';


@Component({
  selector: 'hr-part',
  templateUrl: 'hr-part.html'
})
export class HrPartComponent {
  @Input() button:boolean

  constructor() {
  }
  goInfo(){
    if(!this.button)return

    
  }

}
