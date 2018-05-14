import { Component,Input } from '@angular/core';


@Component({
  selector: 'job-part',
  templateUrl: 'job-part.html'
})
export class JobPartComponent {
  @Input() job:any

  constructor() {
  }

}
