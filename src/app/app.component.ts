import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OverviewPage } from '../pages/overview/overview';
import { ListPage } from '../pages/list/list';
import { AmberPage} from "../pages/amber/amber";
import { ArmyPage} from "../pages/army/army";
import { WestcoastPage} from "../pages/westcoast/westcoast";
import { BunkerPage} from "../pages/bunker/bunker";
import {GamePage} from "../pages/game/game";
import {ArchitecturePage} from "../pages/architecture/architecture";
import {MuseumPage} from "../pages/museum/museum";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Architecture', component: ArchitecturePage},
      { title: 'Tirpitz game', component: GamePage},
      { title: 'Museum information', component: MuseumPage},



    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
