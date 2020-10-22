import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CepService } from '../services/cep/cep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  formCep:FormGroup;
  endereco:string;

  constructor(private alertController:AlertController, 
    private formBuilder:FormBuilder, 
    private cepService:CepService) {
      this.formCep = this.formBuilder.group({
        'cep' : [null, Validators.compose([Validators.required])]
      });
    }

    async mostraAlerta(titulo:string, mensagem:string){
      const alert = await this.alertController.create({
        header: titulo,
        message:mensagem,
        buttons:["Ok"]
      });

      await alert.present();
    }

    async buscaEnderecoCEP(){
      let address = "";
      await this.cepService.buscaEnderecoCep(this.formCep.controls["cep"].value).then((resposta) => {
        address = this.cepService.converterRespostaParaCep(resposta);
        this.endereco = address;
        this.mostraAlerta("Sucesso", "Sucesso!");
      }).catch((error)=>{
        this.mostraAlerta("Erro","Erro ao buscar o cep");
        console.log(error);
      })
    }


}
