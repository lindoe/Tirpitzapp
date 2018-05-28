import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { DeepLinkConfig, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { OverviewPage } from '../pages/overview/overview';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePageModule} from "../pages/home/home.module";
import { OverviewPageModule } from "../pages/overview/overview.module";
import {buildCordovaConfig} from "@ionic/app-scripts/dist/util/cordova-config";
import {AmberPage} from "../pages/amber/amber";
import {ArmyPage} from "../pages/army/army";
import {BunkerPage} from "../pages/bunker/bunker";
import {WestcoastPage} from "../pages/westcoast/westcoast";
import {GamePage} from "../pages/game/game";
import {TemporaryPage} from "../pages/temporary/temporary";
import {ArchitecturePage} from "../pages/architecture/architecture";
import {MuseumPage} from "../pages/museum/museum";
import {AmberPageModule} from "../pages/amber/amber.module";
import {ArmyPageModule} from "../pages/army/army.module";
import {BunkerPageModule} from "../pages/bunker/bunker.module";
import {WestcoastPageModule} from "../pages/westcoast/westcoast.module";
import {GamePageModule} from "../pages/game/game.module";
import {TemporaryPageModule} from "../pages/temporary/temporary.module";
import {ArchitecturePageModule} from "../pages/architecture/architecture.module";
import {MuseumPageModule} from "../pages/museum/museum.module";

const myLink: DeepLinkConfig = {
  links: [
    {component: HomePage, name: 'Home'},
    {component: OverviewPage, name: 'Overview'},
    {component: ListPage, name: 'List'},
    {component: ArmyPage, name: 'Army'},
    {component: BunkerPage, name: 'Bunker'},
    {component: WestcoastPage, name: 'Westcoast'},
    {component: AmberPage, name:'Amber'},
    {component: GamePage, name: 'Game'},
    {component: TemporaryPage, name: 'Temporary'},
    {component: ArchitecturePage, name: 'Architecture'},
    {component: MuseumPage, name:'Museum'},


  ]
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    OverviewPageModule,
    WestcoastPageModule,
    AmberPageModule,
    ArmyPageModule,
    BunkerPageModule,
    GamePageModule,
    TemporaryPageModule,
    ArchitecturePageModule,
    MuseumPageModule,
    IonicModule.forRoot(MyApp, {}, myLink)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverviewPage,
    WestcoastPage,
    AmberPage,
    ArmyPage,
    BunkerPage,
    TemporaryPage,
    GamePage,
    ArchitecturePage,
    MuseumPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
