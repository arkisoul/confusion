import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/delay';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

    constructor() { }

    getDishes(): Observable<Dish[]> {
        return of(DISHES).delay(2000);
    }

    getDish(id: number): Observable<Dish> {
        return of(DISHES.filter((dish: Dish) => (dish.id === id))[0]).delay(2000);
    }

    getFeaturedDish(): Observable<Dish> {
        return of(DISHES.filter((dish: Dish) => (dish.featured))[0]);
    }

}
