import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  title: string;
  description: string;

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get("item").title;
    this.description = this.navParams.get("item").description;
  }

}
