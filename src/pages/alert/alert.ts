import { Component } from '@angular/core';
import { IonicPage, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
  }

  basicAlert() {
    let alert = this.alertCtrl.create(
      {
        title: "Atenção!",
        subTitle: "Curso de Ionic em promoção",
        buttons: ['OK']
      }
    );

    alert.present();
  }

  confirmAlert() {
    let alert = this.alertCtrl.create(
      {
        title : 'Confirmar compra',
        message : 'Tem certeza que deseja comprar este curso?',
        buttons : [
          {
            text : 'Cancelar',
            role : 'cancel',
            handler : () => {
              console.log('Compra cancelada!');
            }
          },
          {
            text : 'Comprar',
            handler : () => {
              console.log('Compra realizada com sucesso!');
            }
          }
        ]
      }
    );

    alert.present();
  }

  inputAlert() {
    let alert = this.alertCtrl.create(
      {
        title : 'Acesso Restrito',
        inputs : [
          {
            name : 'login',
            placeholder : 'Login'
          },
          {
            name: 'senha',
            type : 'password'
          }
        ],
        buttons : [
          {
            text : 'Cancelar',
            role : 'cancel',
            handler : data => {
              console.log('Autenticação cancelada');
            }
          },
          {
            text : 'Entrar',
            handler : data => {
              if (data.login == 'uilton' && data.senha == '123') { 
                console.log('Usuário autenticado');
              }
              else {
                console.log('Seus dados não conferem');
              }
            }
          }
        ]
      }
    ).present();
  }

  radioAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Escolha uma cor');
    
    alert.addInput(
      {
        type : 'radio',
        label : 'Azul',
        value : 'blue',
        checked : true
      }
    );
    alert.addInput(
      {
        type : 'radio',
        label : 'Vermelho',
        value : 'red',
        checked : false
      }
    );
    alert.addInput(
      {
        type : 'radio',
        label : 'Verde',
        value : 'green',
        checked : false
      }
    );

    alert.addButton('Cancelar');

    alert.addButton(
      {
        text : 'OK',
        handler: (data : any) => {
          console.log('Cor selecionada', data);
        }
      }
    );

    alert.present();
  }

  checkAlert() {
    let alert = this.alertCtrl.create();

    alert.setTitle('Quais frutas você gosta?')

    alert.addInput(
      {
        type : 'checkbox',
        label : 'Laranja',
        value : 'orange',
        checked : true
      }
    );
    alert.addInput(
      {
        type : 'checkbox',
        label : 'Banana',
        value : 'banana',
        checked : false
      }
    );

    alert.addButton('Cancelar');

    alert.addButton(
      {
        text : 'OK',
        handler: (data : any) => {
          console.log('Você selecionou as frutas', data);
        }
      }
    );

    alert.present();
  }

}
