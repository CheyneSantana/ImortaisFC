import { AppComponent } from './../app.component';
import { Component, OnInit, Inject } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AgendaImortaisService } from '../agenda-imortais.service';
import { EnviarEmail } from 'src/Models/EnviarEmail';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'popUpAgenda',
  templateUrl: 'popUpAgenda.html'
})
export class popUpAgenda implements OnInit {
  private dataContra: Date;
  private representante: string;
  private nomeTime: string;
  private emailRepresentante: string;
  private telefoneRepresentante: string;
  private email: EnviarEmail;
  private hasErro: boolean;
  private startDate: Date;

  constructor(private agendaService: AgendaImortaisService,
    private toastr: ToastrManager,
    public dialogRef: MatDialogRef<popUpAgenda>
    ) { }

  ngOnInit(): void {
    this.startDate = new Date(Date.now());
  }

  private marcarContra(): void {
    console.log(this.dataContra);
    if (!this.validarDados()) {
      this.email = {
        representante: this.representante,
        telefoneRepresentante: this.telefoneRepresentante,
        nomeTime: this.nomeTime,
        emailRepresentante: this.emailRepresentante,
        dataContra: this.dataContra
      };

      this.agendaService.enviarEmail(this.email)
        .subscribe(
          data => { this.toastr.successToastr('Email enviado com sucesso!'); this.LimparCampos(); this.cancelar(); },
          error => { this.toastr.errorToastr(error.error.message, 'Erro: '); }
        );
    }
  }

  private LimparCampos(): void {
    this.representante = "";
    this.telefoneRepresentante = "";
    this.emailRepresentante = "";
    this.nomeTime = "";
  }

  private validarDados(): boolean {
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

  private cancelar(): void {
    this.dialogRef.close();
  }
}
