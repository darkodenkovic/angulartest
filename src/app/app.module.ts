import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { DetaljiOHerojuComponent } from './detalji-o-heroju/detalji-o-heroju.component';
import { PorukeComponent } from './poruke/poruke.component';
import { AppRoutungModule } from './app-routung.module';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetaljiOHerojuComponent,
    PorukeComponent,
    TablaComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutungModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
