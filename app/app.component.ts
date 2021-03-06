import { Component } from '@angular/core';

import { HeroDetailComponent } from "./hero-detail.component";
import { Hero } from './hero';

@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <hero-detail [hero]="selectedHero"></hero-detail>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
      <li class="add"
        (click)="onAdd()">
        Add Hero
      </li>
    </ul>
  `,
    styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
    .heroes .add {
        text-align: center;
        line-height: 25px;
    }
  `],
    directives: [HeroDetailComponent]
})
export class AppComponent {
    public title = 'Tour of Heroes';
    public heroes = HEROES;
    public selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    onAdd() {
        var newHero = {id: this.newId(), name: ''};
        this.heroes.push(newHero);
        this.selectedHero = newHero;
    }

    newId() {
        var id = 0;
        for (var i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i].id > id) {
                id = this.heroes[i].id;
            }
        }
        return id+1;
    }
}
var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
