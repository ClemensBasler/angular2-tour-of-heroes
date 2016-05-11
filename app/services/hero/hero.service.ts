import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/hero/hero';
import { HEROES } from '../../mocks/heroes/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  // See the 'Take it slow' appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 200) // 2 seconds
    );
  }

  getHero(id: number) {
  return Promise.resolve(HEROES).then(
    heroes => heroes.filter(hero => hero.id === id)[0]
  );
}
}
