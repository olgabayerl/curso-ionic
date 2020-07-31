import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private nativeStorage: NativeStorage) { }

  async insereStorage(nome:string, objeto:any){
    this.nativeStorage.setItem(nome, objeto)
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
  }

  async recuperaStorage(nome:string){
    this.nativeStorage.getItem(nome)
    .then(
      data => console.log(data),
      error => console.error(error)
    );
  }

}
