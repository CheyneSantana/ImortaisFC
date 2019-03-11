import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContatoEmail } from 'src/Models/ContatoEmail';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private baseUrl = window.location.origin + "/api/Contato/";

  constructor(private http: HttpClient) { }

  enviarEmail(contatoEmail: ContatoEmail) {
    return this.http.post(this.baseUrl + "EnviarEmail", contatoEmail);
  }
}
