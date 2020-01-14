import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorukeService {
  poruka: string[] = [];
  dodaj(poruka: string) {
    this.poruka.push(poruka);
  }
  obrisi() {
    this.poruka = [];
  }
  constructor() { }
}
// servis za generisanje i bisanje poruka, testiranje servisa kroz komponente
