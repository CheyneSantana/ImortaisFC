import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnviarEmail } from 'src/Models/EnviarEmail';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EventoImortais } from 'src/Models/EventoImortais';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendaImortaisService {
  private baseUrl = window.location.origin + "/api/AgendaImortais/";

  constructor(private http: HttpClient) { }

  enviarEmail(email: EnviarEmail) {
    return this.http.post(this.baseUrl + "EnviarEmail", email);
  }

  findEventos(data: NgbDateStruct) {
    const params = new HttpParams()
      .set("DataEvento", data.year.toString() + '-' + data.month.toString() + '-' + data.day.toString());

    return this.http.get(this.baseUrl + "GetEventos", { params }).pipe(map(data => data));
  }
}
