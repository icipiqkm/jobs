import { Component, Input} from '@angular/core';
import { App } from 'ionic-angular';
import { JobinfoPage } from '../../pages/jobinfo/jobinfo'
@Component({
  selector: 'job-list',
  templateUrl: 'job-list.html'
})
export class JobListComponent {
  constructor(private app: App) {
  }
  jobs:any[]=[
    {
      name:'高级PHP程序员'
    }
  ]


  onRefresh(refresher){
    setTimeout(() => {
      console.log('Async operation has ended');
      this.jobs.push({
        name:'高级PHP程序员'+ this.jobs.length
      })
      refresher.complete();
    }, 500);
  }
  goJobinfo(item) {
    this.app.getRootNav().push(JobinfoPage,{job:item})
  } 
}
