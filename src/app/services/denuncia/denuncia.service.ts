import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Denuncia } from 'src/app/models/denuncia/denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  collectionName = 'denuncias';

  constructor(private firestore: AngularFirestore) { }

  insereDenuncia(denuncia: Denuncia){
    let denunciaRecord = {
      nome : denuncia.nome,
      email : denuncia.email,
      endereco : denuncia.endereco,
      data : denuncia.data,
      descricao : denuncia.descricao,
      timestamp: new Date()
    }
    return this.firestore.collection(this.collectionName).add(denunciaRecord)
  }
}
