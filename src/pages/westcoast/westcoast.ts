import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WestcoastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-westcoast',
  templateUrl: 'westcoast.html',
})
export class WestcoastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WestcoastPage');
  }
  getInfo(){
    document.getElementById("infobox").style.display="block"
  }
  closeInfo(){
    document.getElementById("infobox").style.display="none"
  }

}
