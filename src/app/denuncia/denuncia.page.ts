import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-denuncia',
  templateUrl: 'denuncia.page.html',
  styleUrls: ['denuncia.page.scss']
})
export class denunciaPage {

  public formDenuncia: FormGroup;

  constructor(public alertController: AlertController, private formBuilder: FormBuilder) {
    this.formDenuncia = this.formBuilder.group({
      'nome': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      'endereco': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'data': [null, Validators.compose([Validators.required])],
      'descricao': [null, Validators.compose([Validators.required, Validators.minLength(3)])]
		});
  }
  async mostraAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

}
