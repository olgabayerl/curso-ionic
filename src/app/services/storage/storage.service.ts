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
      () => console.log('Item armazenado'),
      error => console.error('Erro ao armazenar o item', error)
    );
  }

  async recuperaStorage(nome:string){
    return await this.nativeStorage.getItem(nome);
  }

}
