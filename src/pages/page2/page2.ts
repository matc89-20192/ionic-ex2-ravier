import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  callback: any
  usuarioAtual: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuarioAtual = this.navParams.get('atual');
    this.callback = this.navParams.get("callback");
  }  



  goToPage1(t:string){
    this.callback(this.usuarioAtual);
    this.navCtrl.pop()
  }

  cancel(){
    this.navCtrl.pop();
  }
}

