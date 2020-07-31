import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CepService } from '../services/cep/cep.service';
 
@Component({
  selector: 'app-Cep',
  templateUrl: 'Cep.page.html',
  styleUrls: ['Cep.page.scss']
})
export class CepPage {
 
  public formCep: FormGroup;
  endereco: string;
 
  constructor(public alertController: AlertController, private formBuilder: FormBuilder, private cepService: CepService) {
    this.formCep = this.formBuilder.group({
      'cep': [null, Validators.compose([Validators.required])]
    });
  }
 
  async mostraAlerta(titulo: string, mensagem: string) {
      const alert = await this.alertController.create({
        header: titulo,
        message: mensagem,
        buttons: ['OK']
      });
    }
 
    async buscaEnderecoCEP(){
      let address = "";
      await this.cepService.buscaEnderecoCEP(this.formCep.controls["cep"].value).then((resposta)=>{ address = this.cepService.converterRespostaParaCep(resposta);
        this.endereco = address;
      }).catch(()=>{
        this.mostraAlerta("Erro", "Cep não encontrado!");
      }); 
    }
}
