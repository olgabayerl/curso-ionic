import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Denuncia } from '../models/denuncia/denuncia';
import { DenunciaService } from '../services/denuncia/denuncia.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public formDenuncia: FormGroup;

  constructor(private alertController: AlertController, 
    private formBuilder: FormBuilder, 
    private denunciaService:DenunciaService) {
    this.formDenuncia = this.formBuilder.group({
      'nome': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'endereco':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'data':[null, Validators.compose([Validators.required])],
      'descricao':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email':[null, Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), 
      Validators.email])]
    })
  }

  async mostraAlerta(titulo:string, mensagem:string){
    console.log(this.formDenuncia);
    const alert = await this.alertController.create({
      header:titulo,
      message:mensagem,
      buttons:['OK']
    });
    await alert.present();
  }

  async cadastraDenuncia(){
    let denuncia = new Denuncia();
    denuncia.nome = this.formDenuncia.controls["nome"].value;
    denuncia.endereco = this.formDenuncia.controls["endereco"].value;
    denuncia.email = this.formDenuncia.controls["email"].value;
    denuncia.data = this.formDenuncia.controls["data"].value;
    denuncia.descricao = this.formDenuncia.controls["descricao"].value;

    this.denunciaService.insereDenuncia(denuncia).then(()=>{
      this.mostraAlerta("Sucesso", "Denúncia cadastrada!")
    }).catch((error)=>{
      console.log(error);
      this.mostraAlerta("Erro", "Ops... algo deu errado..");
    })
  }

}
