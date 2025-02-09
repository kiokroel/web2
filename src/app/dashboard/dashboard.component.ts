import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
    heroes$: Observable<Hero[]> | undefined;

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
      this.heroes$ = this.heroService.getHeroes().pipe(
        map(heroes => heroes.slice(1, 5))
      );
    }
}
