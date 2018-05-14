import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MessagePage } from '../message/message'
import { MinePage } from '../mine/mine'
import { ForumPage } from '../forum/forum'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagePage;
  tab3Root = ForumPage;
  tab4Root = MinePage;

  constructor() {

  }
}
