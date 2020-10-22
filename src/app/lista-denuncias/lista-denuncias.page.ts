import { Component, OnInit } from '@angular/core';
import { Denuncia } from '../models/denuncia/denuncia';
import {first} from 'rxjs/operators';
import { DenunciaService } from '../services/denuncia/denuncia.service';

@Component({
  selector: 'app-lista-denuncias',
  templateUrl: './lista-denuncias.page.html',
  styleUrls: ['./lista-denuncias.page.scss'],
})
export class ListaDenunciasPage implements OnInit {

  denuncias:Denuncia[];

  constructor(private denunciaService:DenunciaService) { }

  ngOnInit() {
  }

  async getDenuncias(){
    this.denunciaService.getDenuncias()
    .pipe(first())
    .subscribe((data:Denuncia[])=> {
      this.denuncias = data
    })
  }

}
