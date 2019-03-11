import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ContatoEmail } from 'src/Models/ContatoEmail';
import { ContatoService } from '../contato.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  private nomeContato: string;
  private telefoneContato: string;
  private emailContato: string;
  private comentarioContato: string;
  private opcao: string;
  private contatoEmail: ContatoEmail;
  private hasErro: boolean;
  private opcoes = [
    { name: 'Sugestão' },
    { name: 'Reclamação' },
    { name: 'Reportar erro' }
  ];

  constructor(
    private app: AppComponent,
    private contatoService: ContatoService,
    public toastr: ToastrManager
  ) { }
  opcaoControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.app.setMostrarMenu(false);
  }

  opcaoSelecionada(selecionado: string) {
    this.opcao = selecionado;
  }

  LimparCampos() {
    this.nomeContato = "";
    this.telefoneContato = "";
    this.emailContato = "";
    this.comentarioContato = "";
  }

  EnviarEmail() {
    if(this.validarDados()) {
      this.contatoEmail = {
        nomeContato: this.nomeContato,
        telefoneContato: this.telefoneContato,
        emailContato: this.emailContato,
        comentarioContato: this.comentarioContato,
        assuntoContato: this.opcao
      };

      this.contatoService.enviarEmail(this.contatoEmail)
        .subscribe(
        data => { this.toastr.successToastr('Email enviado com sucesso!'); this.LimparCampos() },
        error => { this.toastr.errorToastr(error, 'Erro'); }
        );
    }
  }

  validarDados(): boolean {
    if (this.opcao === '0' || !this.opcao ) {
      this.toastr.errorToastr('Uma opção deve ser selecionada!','Erro');
      return false;
    }

    if (!this.nomeContato) {
      this.toastr.errorToastr('O nome deve ser preenchido!', 'Erro');
      return false;
    }

    if (!this.telefoneContato) {
      this.toastr.errorToastr('O telefone deve ser preenchido!', 'Erro');
      return false;
    }

    if (!this.emailContato) {
      this.toastr.errorToastr('O email deve ser preenchido', 'Erro');
      return false;
    }

    if (!this.comentarioContato) {
      this.toastr.errorToastr('O comentário deve ser preenchido', 'Erro');
      return false;
    }

    return true;
      
  }

}
