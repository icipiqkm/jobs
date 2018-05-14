import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { JobListComponent } from '../../components/job-list/job-list'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  @ViewChild(Content) content: Content;
  @ViewChild(JobListComponent) jobList: JobListComponent
  constructor(public navCtrl: NavController) {
  }
  // scrollToTop() { 
  //   this.content.scrollToTop();  
  // } 

  // scrollHandler(event) {
  //   // this.headerOpacity=`rgba(0,0,0,${event.scrollTop/130})`
  //   // console.log(this.headerOpacity)
  // }  


  doRefresh(refresher) {
    this.jobList.onRefresh(refresher)
    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   this.jobs.push({
    //     name:'高级PHP程序员'+ this.jobs.length
    //   })
    //   refresher.complete();
    // }, 500);
  }
}
