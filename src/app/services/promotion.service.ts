import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/delay';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

    constructor() { }

    getPromotions(): Observable<Promotion[]> {
        return of(PROMOTIONS).delay(2000);
    }

    getPromotion(id: number): Observable<Promotion> {
        return of(PROMOTIONS.filter((promotion: Promotion) => (promotion.id === id))[0]).delay(2000);
    }

    getFeaturedPromotion(): Observable<Promotion> {
        return of(PROMOTIONS.filter((promotion: Promotion) => (promotion.featured))[0]).delay(2000);
    }

}
