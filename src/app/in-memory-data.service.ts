import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService
    implements InMemoryDbService {
    createDb() {
        const heroes = [
          { id: 12, name: 'Dr. Nice', power: 'Super Strength', age: 30, origin: 'Earth', weakness: 'Kryptonite', ally: 'Superman' },
          { id: 13, name: 'Bombasto', power: 'Explosive Blasts', age: 25, origin: 'Mars', weakness: 'Water', ally: 'Magma' },
          { id: 14, name: 'Celeritas', power: 'Super Speed', age: 28, origin: 'Venus', weakness: 'Time Manipulation', ally: 'Flash' },
          { id: 15, name: 'Magneta', power: 'Magnetic Fields', age: 35, origin: 'Jupiter', weakness: 'Wood', ally: 'Iron Man' },
          { id: 16, name: 'RubberMan', power: 'Elasticity', age: NaN, origin: NaN, weakness: NaN, ally: NaN },
          { id: 17, name: 'Dynama', power: 'Electricity', age: 22, origin: 'Neptune', weakness: 'Rubber', ally: 'Storm' },
          { id: 18, name: 'Dr. IQ', power: 'Super Intelligence', age: 50, origin: 'Pluto', weakness: 'Emotions', ally: 'Batman' },
          { id: 19, name: 'Magma', power: 'Lava Control', age: 27, origin: 'Sun', weakness: 'Cold', ally: 'Bombasto' },
          { id: 20, name: 'Tornado', power: 'Wind Control', age: 33, origin: 'Earth', weakness: 'Vacuum', ally: 'Storm' }
        ];
        return { heroes };
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0
            ? Math.max(...heroes.map((hero) => hero.id)) + 1
            : 11;
    }
}
