import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Denuncia } from '../models/denuncia/denuncia';
import { DenunciaService } from '../services/denuncia/denuncia.service';
import { NativeStorageService } from '../services/native-storage/native-storage.service';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public formDenuncia: FormGroup;

  latitude:any;
  longitude:any;
  endereco:string;

  constructor(private alertController: AlertController, 
    private formBuilder: FormBuilder, 
    private denunciaService:DenunciaService, 
    private nativeStorageService:NativeStorageService,
    private geolocation:Geolocation,
    private geocoder:NativeGeocoder) {
    this.formDenuncia = this.formBuilder.group({
      'nome': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'endereco':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'data':[null, Validators.compose([Validators.required])],
      'descricao':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email':[null, Validators.compose([Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), 
      Validators.email])]
    })
  }

  async converteCoordenadas(){
    let options: NativeGeocoderOptions = {
      useLocale : true,
      maxResults : 5
    }

    this.geocoder.reverseGeocode(this.latitude, this.longitude, options).then((result: NativeGeocoderResult[])=>{
      this.endereco = JSON.stringify(result[0]);
      console.log( JSON.stringify(result));
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  async recuperaCoordenadas(){
    const position = await this.geolocation.getCurrentPosition({
      enableHighAccuracy:true,
      timeout:5000,
      maximumAge:0
    }).then((resp: Geoposition)=>{
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(JSON.stringify(resp));
    }).catch((error)=>{
      this.mostraAlerta("Erro", "Ocorreu um erro ao obter as coordenadas");
      console.log(error);
    })
    await this.converteCoordenadas();
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

  async recuperaEnderecoStorage(){
    const endereco = await this.nativeStorageService.recuperarStorage("endereco");
    this.formDenuncia.controls["endereco"].setValue(endereco);
    console.log("Endereco: " + endereco);
  }

  ionViewWillEnter(){
    this.recuperaEnderecoStorage();
  }

}
