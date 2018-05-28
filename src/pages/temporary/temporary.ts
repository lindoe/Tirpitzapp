import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemporaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temporary',
  templateUrl: 'temporary.html',
})
export class TemporaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemporaryPage');
  }
  getInfo(){
    document.getElementById("infobox").style.display="block"
  }
  closeInfo(){
    document.getElementById("infobox").style.display="none"
  }

}
