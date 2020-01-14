import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  heroji: Hero[] = [];
  constructor(private herojServis: HeroService) { }
  ngOnInit() {
    this.uzmiHeroja();
  }
  uzmiHeroja(): void {
    this.herojServis.uzmiHeroja()
      .subscribe(heroji => this.heroji = heroji.slice(1, 5));
  }
}
