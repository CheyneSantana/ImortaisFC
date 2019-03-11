import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Imortais F. C.';
  MostrarMenu: Boolean = true;

  get getMostrarMenu() {
    return this.MostrarMenu;
  }

  setMostrarMenu(prValor: Boolean) {
    this.MostrarMenu = prValor;
  }
}
