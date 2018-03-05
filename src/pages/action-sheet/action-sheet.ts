import { Component } from '@angular/core';
import { IonicPage, ActionSheetController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public actionSheetCtrl : ActionSheetController) {
  }

  ionViewDidLoad() {
    
  }

  abrirActionSheet() {
    let actionSheet = this.actionSheetCtrl.create(
      {
        title: "Opções",
        buttons: [
          {
            icon: "md-create",
            text: "Opção A",
            role: "destructive",
            handler:   () => {
              //alert("Você clicou na opção A");
            }
          },
          {
            icon: "md-basket",
            text: "Opção B",
            handler:   () => {
              //alert("Você clicou na opção B");
            }
          },
          {
            icon: "md-exit",
            text: "Cancelar",
            role: "cancel",
            handler:   () => {
              //alert("Você clicou na opção Cancelar");
            }
          }
        ]
      }
    );

    actionSheet.present();
  }

}
