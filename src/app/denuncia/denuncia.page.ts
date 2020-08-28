import { Component,OnInit  } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Denuncia } from '../models/denuncia/denuncia';
import { DenunciaService } from '../services/denuncia/denuncia.service';
import { StorageService } from '../services/storage/storage.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


@Component({
  selector: 'app-denuncia',
  templateUrl: 'denuncia.page.html',
  styleUrls: ['denuncia.page.scss']
})
export class denunciaPage {

  public formDenuncia: FormGroup;
  latitude:any;
  longitude:any;
  endereco:String;


  constructor(public alertController: AlertController, 
              private formBuilder: FormBuilder, 
              private denunciaService: DenunciaService, 
              private storageService: StorageService,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder) {
    this.formDenuncia = this.formBuilder.group({
      'nome': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      'endereco': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'data': [null, Validators.compose([Validators.required])],
      'descricao': [null, Validators.compose([Validators.required, Validators.minLength(3)])]
    });
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
   
    const position = await this.geolocation.getCurrentPosition({enableHighAccuracy: true, timeout: 5000, maximumAge: 0}).then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude; 
        console.log(JSON.stringify(resp));
      }).catch((error) => {
        this.mostraAlerta('Erro ao obter as coordenadas!', error);
        console.log('Erro ao obter as coordenadas!' + error);
    });
    await this.converteCoordenadas();
  }
  ionViewWillEnter(){
    this.recuperaEnderecoStorage();
  }

  async converteCoordenadas(){
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };
    
  this.nativeGeocoder.reverseGeocode(this.latitude, this.longitude, options)
    .then((result: NativeGeocoderResult[]) => {
      this.endereco = JSON.stringify(result[0]);
      console.log(this.endereco);
    })
    .catch((error: any) => console.log(error));
  };

}
