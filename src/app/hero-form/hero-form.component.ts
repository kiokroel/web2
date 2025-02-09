import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroFormComponent implements OnInit {

  heroForm: FormGroup;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  submitted = false;

  private addHeroSubscription: Subscription | undefined;

  constructor(private fb: FormBuilder, private heroService: HeroService) {
    this.heroForm = this.fb.group({
      name: ['Dr. IQ', Validators.required],
      age: [50],
      power: [this.powers[0], Validators.required],
      origin: ['Pluto'],
      weakness: ['Emotions'],
      ally: ['Batman']
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.addHeroSubscription) {
      this.addHeroSubscription.unsubscribe();
      }
    }

  onSubmit(): void {
    this.submitted = true;
    if (this.heroForm.valid) {
      const hero: Hero = this.heroForm.value as Hero;
      this.addHeroSubscription = this.heroService.addHero(hero).subscribe();
    }
  }

  newHero(): void {
    this.heroForm.reset({
      name: 'Dr. IQ',
      age: 50,
      power: this.powers[0],
      origin: 'Pluto',
      weakness: 'Emotions',
      ally: 'Batman'
    });
  }
}
