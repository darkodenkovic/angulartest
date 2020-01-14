import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROJI } from './sprdnja-heroji';
import {Observable, of} from 'rxjs';
import { PorukeService } from './poruke.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  uzmiHeroja(): Observable<Hero[]> {
    this.porukaServis.dodaj('HeroService: pokupljeni svi heroji!');
    return of(HEROJI);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.porukaServis.dodaj(`HeroService: pokupljen heroj sa id-om ${id}`);
    return of(HEROJI.find(hero => hero.id === id));
  }
  constructor(private porukaServis: PorukeService) { }
}
// servis za prepoznavanje koji je heroj kliknut
// HeroService.uzmiHeroja() - kupi sve heroje iz niza objekata klase Hero (sprdnja-heroji.ts)
