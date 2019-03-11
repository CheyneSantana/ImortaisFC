import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private app: AppComponent, config: NgbCarouselConfig) {
    config.interval = 3000;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.app.setMostrarMenu(false);
  }

}
