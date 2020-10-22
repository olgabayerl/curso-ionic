import { Injectable } from '@angular/core';
import {NativeStorage} from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class NativeStorageService {

  constructor(private nativeStorage:NativeStorage){

  }

  async insereStorage(nome:string, objeto:any){
    this.nativeStorage.setItem(nome, objeto).
    then(()=> console.log('Item armazenado'))
    .catch(error=> console.log('Erro ao armazenar item', error));
  }
  
  async recuperarStorage(nome:string){
    return await this.nativeStorage.getItem(nome);
  }

}
