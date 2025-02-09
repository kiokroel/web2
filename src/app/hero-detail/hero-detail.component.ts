import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => {this.hero = hero;
      this.cdr.markForCheck()});
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
  if (this.hero) {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}

}
