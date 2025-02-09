import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero> | undefined;
  updateHero$: Observable<void> | undefined

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero$ = this.heroService.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    this.updateHero$ = this.heroService.updateHero(hero).pipe(
      tap(() => this.goBack()) // Выполняем навигацию после успешного обновления
    );
  }
}
