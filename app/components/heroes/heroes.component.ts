import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero/hero';
import { HeroDetailComponent} from '../../components/hero-detail/hero-detail.component';
import { HeroService} from '../../services/hero/hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/components/heroes/heroes.component.html',
  styleUrls: ['app/components/heroes/heroes.component.css'],
  directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
  heroes: Hero [];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { };

  getHeroes() {
  this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
    }

  onSelect(hero: Hero) {
     this.selectedHero = hero;
    }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
