import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Denuncia } from '../models/denuncia/denuncia';
import { DenunciaService } from '../services/denuncia/denuncia.service';
import { StorageService } from '../services/storage/storage.service';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-denuncia',
  templateUrl: 'denuncia.page.html',
  styleUrls: ['denuncia.page.scss']
})
export class denunciaPage {

  public formDenuncia: FormGroup;
  coordenadas: Geoposition;
  posicoes:Geoposition[];

  constructor(public alertController: AlertController, 
              private formBuilder: FormBuilder, 
              private denunciaService: DenunciaService, 
              private storageService: StorageService,
              private geolocation: Geolocation) {
    this.formDenuncia = this.formBuilder.group({
      'nome': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      'endereco': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'data': [null, Validators.compose([Validators.required])],
      'descricao': [null, Validators.compose([Validators.required, Validators.minLength(3)])]
    });
    this.recuperaEnderecoStorage();
    this.verificaCoordenadas();
  };
  async mostraAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  };
  async cadastraDenuncia(){
    let denuncia = new Denuncia();
    denuncia.nome = this.formDenuncia.controls["nome"].value;
    denuncia.email = this.formDenuncia.controls["email"].value;
    denuncia.endereco = this.formDenuncia.controls["endereco"].value;
    denuncia.data = this.formDenuncia.controls["data"].value;
    denuncia.descricao = this.formDenuncia.controls["descricao"].value;

    this.denunciaService.insereDenuncia(denuncia).then(()=>{
      this.mostraAlerta("Sucesso", "Cadastro efetuado!");
    }).catch((error)=>{
      console.log(error);
    })
  };

  async recuperaEnderecoStorage(){
    const endereco = await this.storageService.recuperaStorage("endereco");
    this.formDenuncia.controls["endereco"].setValue(endereco);
    console.log("Endereço: " +endereco );
  };

  async recuperaCoordenadas(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coordenadas = resp;
      console.log(JSON.stringify(resp));
    }).catch((error) => {
      this.mostraAlerta('Erro ao obter as coordenadas!', error);
      console.log(error);
    });
  }

  async verificaCoordenadas(){
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    this.posicoes.push(data);
    console.log(data);
    });
  }
}
