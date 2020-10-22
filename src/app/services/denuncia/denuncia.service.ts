import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Denuncia } from 'src/app/models/denuncia/denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  collectionName:string = "denuncias";

  constructor(private firestore: AngularFirestore) { }

  insereDenuncia(denuncia:Denuncia){
    let denunciaRecord = {
      nome :denuncia.nome,
      email:denuncia.email,
      endereco:denuncia.endereco,
      data:denuncia.data,
      descricao:denuncia.descricao,
      timestamp:new Date()
    }
    return this.firestore.collection(this.collectionName).add(denunciaRecord);
  }

  getDenuncias():Observable<Denuncia[]>{
    return this.firestore.collection<Denuncia>(this.collectionName).valueChanges();
  }
}
