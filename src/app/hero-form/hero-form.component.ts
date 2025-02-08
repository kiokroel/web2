import { Component } from '@angular/core';

import { Hero } from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor(private heroService: HeroService) {}

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  name: string = 'Dr. IQ';
  power: string = this.powers[0];
  age: number = 50;
  origin: string = 'Pluto';
  weakness: string = 'Emotions';
  ally: string = 'Batman';

  model: Hero = { name: this.name, power: this.power, age: this.age, origin: this.origin, weakness: this.weakness, ally: this.ally } as Hero;

  submitted = false;



  onSubmit() { this.submitted = true; }


  newHero() {
      this.heroService.addHero(this.model)
        .subscribe();
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

}
