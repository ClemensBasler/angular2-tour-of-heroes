import { Component, OnInit } from '@angular/core';
import { HeroService } from './services/hero/hero.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './components/dashboard/dashboard.components';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
  }
])

export class AppComponent {
  title = 'tour of Heroes';
}
