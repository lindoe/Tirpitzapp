import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArmyPage} from "../army/army";
import {AmberPage} from "../amber/amber";
import {WestcoastPage} from "../westcoast/westcoast";
import {BunkerPage} from "../bunker/bunker";
import {TemporaryPage} from "../temporary/temporary";

/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }
pushArmy(){
    this.navCtrl.push(ArmyPage)
}
pushGold(){
    this.navCtrl.push(AmberPage)
}
pushWest(){
    this.navCtrl.push(WestcoastPage)
}
pushCurrent(){
    this.navCtrl.push(TemporaryPage)
}
pushBunker(){
    this.navCtrl.push(BunkerPage)
}

}
