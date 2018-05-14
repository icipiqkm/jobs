import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormGroup } from '@angular/forms';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
}