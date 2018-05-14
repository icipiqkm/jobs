import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomPage } from '../pages/welcom/welcom'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public storage:Storage
    ) {
    // storage.get('firstIn').then(result=>{
    //   if(result){
    //     this.rootPage=TabsPage
    //   }else{
    //     this.rootPage=WelcomPage
    //   }
    // })
    this.rootPage=TabsPage
    platform.ready().then(() => {
      // 好了, 平台已经准备就绪, 我们的插件也可以使用了。
      // 在这里, 你可以做任何更高层次的本地东西, 你可能需要的。
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
