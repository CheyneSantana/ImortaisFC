import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-animacao-inicial',
  templateUrl: './animacao-inicial.component.html',
  styleUrls: ['./animacao-inicial.component.scss']
})
export class AnimacaoInicialComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.app.setMostrarMenu(true);
  }

  MostrarMenu() {
    this.app.setMostrarMenu(false);

  }
}
