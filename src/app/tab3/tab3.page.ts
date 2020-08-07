import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  fotoURL:string;
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(private camera: Camera) {}

  tirarFoto() {
    this.camera.getPicture(this.cameraOptions).then((imagem) => {
    
      let base64Image = 'data:image/jpeg;base64,' + imagem;
      this.fotoURL = base64Image;
    }, (err) => {
      console.log(err);
    });
  }
}
