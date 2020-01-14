import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import {HEROJI} from '../sprdnja-heroji';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroji: Hero[];  // heroji - niz heroja
  // *******************************************************
  // ******************************************************
  /*izabraniHeroj: Hero;
   = {
    id: 1,
    name: 'Misko'
  };
  onSelect(heroj: Hero): void {
    this.izabraniHeroj = heroj;
  }*/
  // heroji = HEROJI; bez koriscenja servisa
  constructor(private heroService: HeroService) { }
  uzmiHeroje(): void {
    this.heroService.uzmiHeroja()
    .subscribe(heroji => this.heroji = heroji);
  }
  ngOnInit() {
    this.uzmiHeroje();
    // uzmiHeroje() - definisana da kada se ucita komponenta uz pomoc servisa hero.service.uzmiHeroja() popuni listu heroja
  }
}
