import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ChatPage}from '../chat/chat'
@Component({
  selector: 'page-jobinfo',
  templateUrl: 'jobinfo.html',
})
export class JobinfoPage {
  job:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.job = navParams.data.job;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobinfoPage');
  }
  goChat(){
    this.navCtrl.push(ChatPage,{job:this.job})
  }

}
