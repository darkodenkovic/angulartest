import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-detalji-o-heroju',
  templateUrl: './detalji-o-heroju.component.html',
  styleUrls: ['./detalji-o-heroju.component.css']
})
export class DetaljiOHerojuComponent implements OnInit {
  heroj: Hero;

// @Input() izabraniHeroj: Hero;
  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(heroj => this.heroj = heroj);
  }

  nazad(): void {
    this.location.back();
  }
}
