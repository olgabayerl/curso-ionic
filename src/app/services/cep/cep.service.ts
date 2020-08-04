import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StorageService } from '../storage/storage.service';
 
@Injectable({
  providedIn: 'root'
})
export class CepService {
 
  constructor(private httpClient:HttpClient, private storageService: StorageService) { }
 
  async buscaEnderecoCEP(cep: string) {
    const url ='https://viacep.com.br/ws/'+ cep + '/json';
    return this.httpClient.get(url).toPromise();
  }
 
  public converterRespostaParaCep(cepNaResposta:any){
    let endereco = cepNaResposta.logradouro + ", " + cepNaResposta.bairro + ", " + cepNaResposta.localidade + " - " + cepNaResposta.uf;
    this.storageService.insereStorage("endereco", endereco);
    return endereco;
  }
}
