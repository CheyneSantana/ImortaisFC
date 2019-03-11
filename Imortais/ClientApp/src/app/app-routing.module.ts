import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimacaoInicialComponent } from './animacao-inicial/animacao-inicial.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';
import { AgendaImortaisComponent } from './agenda-imortais/agenda-imortais.component';
import { ElencoComponent } from './elenco/elenco.component';


const routes: Routes = [
  { path: '', component: AnimacaoInicialComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'agenda', component: AgendaImortaisComponent },
  { path: 'elenco', component: ElencoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
