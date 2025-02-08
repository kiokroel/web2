import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  heroForm: FormGroup;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  submitted = false;

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

  onSubmit(): void {
    this.submitted = true;
    if (this.heroForm.valid) {
      const hero: Hero = this.heroForm.value as Hero;
      this.heroService.addHero(hero).subscribe();
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
