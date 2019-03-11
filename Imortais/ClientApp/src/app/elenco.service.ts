import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElencoService {
  private baseUrl = window.location.origin + "/api/Elenco/";

  constructor(private http: HttpClient) { }

  buscarElenco() {
    return this.http.get(this.baseUrl + "buscarElenco").pipe(map(data => data));
  }
}
