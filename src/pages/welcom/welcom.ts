import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import{LoginPage}from '../login/login'
/**
 * Generated class for the WelcomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcom',
  templateUrl: 'welcom.html',
})
export class WelcomPage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(){
    this.navCtrl.setRoot(TabsPage)
  }
}
