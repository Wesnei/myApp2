import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
id=0;
nome='';
cpf='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  salvar () {
    console.log(this.id);
    console.log(this.nome);
    console.log(this.cpf);


let paciente = {id: this.id, nome: this.nome, cpf: this.cpf};
HomePage.banco_de_dados.push(paciente);

let subtitulo = 'O paciente' + this.nome + 'foi cadastrado com sucesso!';

    const alert = this.alertCtrl.create({
      title: 'Novo paciente',
      subTitle: 'subtitulo',
      buttons: ['OK']
    });
    alert.present();

    this.navCtrl.pop();
  }


}
