import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

// import { of } from 'rxjs/observable/of'
// import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

    constructor(
        private restangular: Restangular,
        private processHttpMsgService: ProcessHttpmsgService) { }

    getDishes(): Observable<Dish[]> {
        return this.restangular.all('dishes').getList();
    }

    getDish(id: number): Observable<Dish> {
        return this.restangular.one('dishes', id).get();
    }

    getFeaturedDish(): Observable<Dish> {
        return this.restangular.all('dishes').getList({featured: true})
            .map(dishes => dishes[0]);
    }

    getDishIds(): Observable<number[]> {
        return this.getDishes()
            .map(dishes => { return dishes.map(dish => dish.id) });
    }

}
