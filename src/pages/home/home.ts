import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  static banco_de_dados = [ // pacientes}
    {id: 1, nome:'José da Silva', cpf :'000.000.000-00'},
    {id: 2, nome:'Maria Clara', cpf:'111.111.111-11'},
    {id: 3, nome:'Francisco Mateus', cpf:'222.222.222-22'},

];

  items = [];

  constructor(public navCtrl: NavController) {
this.items = HomePage.banco_de_dados;
  }
  abrirform(){
    this.navCtrl.push('FormPage')
  }

  salvar() {

  }
}
