import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  itemEmEdicao;
  title;
  description;

  constructor(public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    this.itemEmEdicao      = this.navParams.get('item');
    this.title        = this.itemEmEdicao.title
    this.description  = this.itemEmEdicao.description;
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    }
    this.view.dismiss({itemAnt: this.itemEmEdicao, newItem: newItem});
  }

  close(){
    this.view.dismiss();
  }


}
