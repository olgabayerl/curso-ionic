import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  fotoUrl:string;
  cameraOptions: CameraOptions = {
    quality:20,
    destinationType:this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType:this.camera.MediaType.PICTURE,
  }
  constructor(private camera:Camera) {}

  tirarFoto(){
    this.camera.getPicture(this.cameraOptions).then((imagem)=>{
      this.fotoUrl = 'data:image/jpeg;base64,' + imagem;
    }).catch((error)=>{
      console.log(error);
    })
  }

}
