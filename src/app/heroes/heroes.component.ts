import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes) => {
              this.heroes = heroes;
              this.cdr.markForCheck();});
    }

    add(name: string, power: string, age: number, origin: string, weakness: string, ally: string): void {
      name = name.trim();
      power = power.trim();
      age = age
      origin = origin.trim();
      weakness = weakness.trim();
      ally = ally.trim();

      if (!name) { return; }

      this.heroService.addHero({ name, power, age, origin, weakness, ally } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
          this.cdr.markForCheck();
        });
    }

    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero.id).subscribe();
      this.cdr.markForCheck();
    }

  protected readonly Number = Number;
}
