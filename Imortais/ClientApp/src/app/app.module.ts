import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatProgressBarModule, MatChipsModule } from '@angular/material';
import { IgxGridModule, IgxMaskModule, IgxInputGroupModule  } from 'igniteui-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToastrModule } from 'ng6-toastr-notifications';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AboutComponent } from './about/about.component';
import { AgendaImortaisComponent } from './agenda-imortais/agenda-imortais.component';
import { AnimacaoInicialComponent } from './animacao-inicial/animacao-inicial.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ElencoComponent } from './elenco/elenco.component';
import { popUpAgenda } from './agenda-imortais/popUpAgenda';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AgendaImortaisComponent,
    AnimacaoInicialComponent,
    ContatoComponent,
    HomeComponent,
    MenuComponent,
    ElencoComponent,
    popUpAgenda
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxMaskModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  entryComponents: [AgendaImortaisComponent, popUpAgenda],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
