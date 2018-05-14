import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { MessagePage } from '../pages/message/message'
import { ForumPage } from '../pages/forum/forum'
import { MinePage } from '../pages/mine/mine'
import { WelcomPage } from '../pages/welcom/welcom'
import { LoginPage } from '../pages/login/login'
import { JobinfoPage } from '../pages/jobinfo/jobinfo'
import { ChatPage } from '../pages/chat/chat'

import { JobListComponent } from '../components/job-list/job-list'
import { JobMsgComponent } from '../components/job-msg/job-msg'


import { HrPartComponent } from '../components/@parts/hr-part/hr-part'
import { JobPartComponent } from '../components/@parts/job-part/job-part'
import { GpsPartComponent } from '../components/@parts/gps-part/gps-part'
import { ChatPartComponent } from '../components/@parts/chat-part/chat-part'
import{ChatTextPartComponent}from '../components/@parts/chat-text-part/chat-text-part'
const PAGES = [
  MyApp,
  TabsPage,

  WelcomPage,
  LoginPage,

  HomePage,
  MessagePage,
  ForumPage,
  MinePage,
  JobinfoPage,
  ChatPage
]
const COMPONENTS = [ 
  JobListComponent,
  JobMsgComponent,


  HrPartComponent,
  JobPartComponent,
  GpsPartComponent,
  ChatPartComponent,
  ChatTextPartComponent
]
@NgModule({
  declarations: [...PAGES, ...COMPONENTS],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [...PAGES, ...COMPONENTS],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
