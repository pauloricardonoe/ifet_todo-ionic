import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';


// @IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  saveItem() {

    let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}

