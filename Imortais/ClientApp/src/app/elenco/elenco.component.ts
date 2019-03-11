import { Component, OnInit } from '@angular/core';
import { ElencoService } from '../elenco.service';
import { Elenco } from 'src/Models/Elenco';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.scss']
})
export class ElencoComponent implements OnInit {
  private elenco: Elenco;

  constructor(private app: AppComponent,
    private service: ElencoService,
    private toastr: ToastrManager) { }

  ngOnInit() {
    this.app.setMostrarMenu(false);
    this.buscarElenco();
  }

  private buscarElenco(): void {
    this.service.buscarElenco()
      .subscribe(
        data => { this.retornoBuscar(data) },
        error => { this.toastr.errorToastr(error); }
      );
  }

  private retornoBuscar(data: any): void {
    this.elenco = data;
  }

}
