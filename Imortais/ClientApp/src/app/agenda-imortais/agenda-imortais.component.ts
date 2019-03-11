import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AgendaImortaisService } from '../agenda-imortais.service';
import { EnviarEmail } from 'src/Models/EnviarEmail';
import { EventoImortais } from 'src/Models/EventoImortais';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-agenda-imortais',
  templateUrl: './agenda-imortais.component.html',
  styleUrls: ['./agenda-imortais.component.scss']
})
export class AgendaImortaisComponent implements OnInit {
  data: NgbDateStruct;
  email: EnviarEmail;
  closeResult: string;
  dataContra: NgbDateStruct;
  dataContraSelecioada: NgbDateStruct;
  representante: string;
  nomeTime: string;
  emailRepresentante: string;
  telefoneRepresentante: string;
  eventos: EventoImortais[];
  private hasErro: boolean;

  constructor(private app: AppComponent,
    private calendar: NgbCalendar,
    private modalService: NgbModal,
    private agendaService: AgendaImortaisService,
    public toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.app.setMostrarMenu(false);
    this.data = this.calendar.getToday();
    this.getEvento();
    this.dataContraSelecioada = this.data;
  }

  open(content) {
    this.dataContra = this.dataContraSelecioada;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdropClass: 'light-blue-backdrop' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result === 'Save Click') {
        if (this.validarDados()) {
          this.marcarContra();
        }
        else {
          this.dataContraSelecioada = this.dataContra;
          this.open(content);
        }
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  marcarContra() {
    if (!this.validarDados()) {
      this.email = {
        representante: this.representante,
        telefoneRepresentante: this.telefoneRepresentante,
        nomeTime: this.nomeTime,
        emailRepresentante: this.emailRepresentante,
        dataContra: this.dataContra.day + '/' + this.dataContra.month + '/' + this.dataContra.year
      };

      this.agendaService.enviarEmail(this.email)
        .subscribe(
          data => { this.toastr.successToastr('Email enviado com sucesso!'); this.LimparCampos(); },
          error => { this.toastr.errorToastr(error, 'Erro: '); }
        );
    }
  }

  getEvento() {
    this.eventos = [];
    this.agendaService.findEventos(this.data)
      .subscribe(
        data => {
          this.makeEvento(data);
        });
  }

  private makeEvento(data: any) {
    data.forEach(obj => {
      this.eventos.push(obj);
    });
  }

  validarDados(): boolean {
    this.hasErro = false;
    if (!this.dataContra) {
      this.toastr.errorToastr('A data deve ser selecionada!', 'Erro');
      this.hasErro = true;
    }

    if (!this.representante) {
      this.toastr.errorToastr('O Nome do representante deve ser preenchido', 'Erro');
      this.hasErro = true;
    }

    if (!this.telefoneRepresentante) {
      this.toastr.errorToastr('O telefone do representante deve ser preenchido', 'Erro');
      this.hasErro = true;
    }

    if (!this.emailRepresentante) {
      this.toastr.errorToastr('O email do representante deve ser preenchido', 'Erro');
      this.hasErro = true;
    }

    if (!this.nomeTime) {
      this.toastr.errorToastr('O nome do time deve ser preenchido', 'Erro');
      this.hasErro = true;
    }

    return this.hasErro;
  }

  LimparCampos() {
    this.dataContra = this.data;
    this.representante = "";
    this.telefoneRepresentante = "";
    this.emailRepresentante = "";
    this.nomeTime = "";
  }

}
