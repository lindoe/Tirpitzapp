import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AmberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amber',
  templateUrl: 'amber.html',
})
export class AmberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmberPage');
  }
  getInfo(){
    document.getElementById("infobox").style.display="block"
  }
  closeInfo(){
    document.getElementById("infobox").style.display="none"
  }
}
