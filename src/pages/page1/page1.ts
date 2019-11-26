import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  inicio: string = "Oi, "
  fim: string = "!"
  pessoa: any = "Fulano";
  
  constructor(public navCtrl: NavController, public navParams: NavParams){  }


  goToPage2(){   
    this.navCtrl.push('Page2',{
        'callback': this.receberDados.bind(this),
        'atual': this.pessoa
    });
  }

  receberDados(d:string){
    if(d != undefined && d != '')
      this.pessoa = d;
    else if (d == ''){
      this.inicio = "Oi!";
      this.pessoa = "";
      this.fim = "";
    }
  }


}
