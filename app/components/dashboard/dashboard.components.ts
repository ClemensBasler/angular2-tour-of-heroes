import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from '../../interfaces/hero/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/dashboard/dashboard.component.html',
  styleUrls: ['app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(
      private router: Router,
      private heroService: HeroService) {}

    ngOnInit() {
      this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
      let link = ['HeroDetail', { id: hero.id }];
      this.router.navigate(link);
    }
}
