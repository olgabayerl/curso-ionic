import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient:HttpClient) { }

  async buscaEnderecoCep(cep:string){
    const url = 'https://viacep.com.br/ws/'+cep+'/json';
    return this.httpClient.get(url).toPromise();
  }

  public converterRespostaParaCep(cepNaResposta:any):string{
    let endereco = cepNaResposta.logradouro + ', ' + cepNaResposta.bairro + ', '+cepNaResposta.complemento + ', '+ cepNaResposta.localidade + " - " + cepNaResposta.uf;
    return endereco;
  }

}
