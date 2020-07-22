import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-denuncia',
  templateUrl: 'denuncia.page.html',
  styleUrls: ['denuncia.page.scss']
})
export class denunciaPage {

  constructor(public alertController: AlertController) {}
  async mostraAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

}
