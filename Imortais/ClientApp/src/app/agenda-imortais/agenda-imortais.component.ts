import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AgendaImortaisService } from '../agenda-imortais.service';
import { EnviarEmail } from 'src/Models/EnviarEmail';
import { EventoImortais } from 'src/Models/EventoImortais';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { popUpAgenda } from './popUpAgenda';

@Component({
  selector: 'app-agenda-imortais',
  templateUrl: './agenda-imortais.component.html',
  styleUrls: ['./agenda-imortais.component.scss']
})
export class AgendaImortaisComponent implements OnInit {
  data: NgbDateStruct;
  closeResult: string;
  eventos: EventoImortais[];

  constructor(private app: AppComponent,
    private calendar: NgbCalendar,
    private agendaService: AgendaImortaisService,
    public toastr: ToastrManager,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.app.setMostrarMenu(false);
    this.data = this.calendar.getToday();
    this.getEvento();
  }

  private openPopup(): void  {
    const dialogRef = this.dialog.open(popUpAgenda, {
      width: 'auto',
      height: 'auto'
    });
  }

  private getEvento(): void {
    this.eventos = [];
    this.agendaService.findEventos(this.data)
      .subscribe(
        data => {
          this.makeEvento(data);
        });
  }

  private makeEvento(data: any) : void {
    data.forEach(obj => {
      this.eventos.push(obj);
    });
  }
}
