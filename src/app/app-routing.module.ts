import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FiltroComponent } from './filtro/filtro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contenido', component: ContenidoComponent },
  { path: 'filtro', component: FiltroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
