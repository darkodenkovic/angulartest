import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TablaComponent } from './tabla/tabla.component';
import { DetaljiOHerojuComponent } from './detalji-o-heroju/detalji-o-heroju.component';


const rute: Routes = [
  { path: '', redirectTo: '/tabla', pathMatch: 'full' },
  { path: 'heroji', component: HeroesComponent },
  { path: 'tabla' , component: TablaComponent },
  { path: 'detalji/:id' , component: DetaljiOHerojuComponent },
  ];

// path definise prikaz u linku, a component otvara odgovarajucu komponentu
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(rute)],
  exports: [ RouterModule ]
})
export class AppRoutungModule { }
