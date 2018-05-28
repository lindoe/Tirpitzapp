import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BunkerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bunker',
  templateUrl: 'bunker.html',
})
export class BunkerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BunkerPage');
  }
  getInfo(){
    document.getElementById("infobox").style.display="block"
  }
  closeInfo(){
    document.getElementById("infobox").style.display="none"
  }
}
