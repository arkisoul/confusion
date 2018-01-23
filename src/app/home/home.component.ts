import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';

import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    featuredDish: Dish;
    featuredPromotion: Promotion

    constructor(
        private dishService: DishService,
        private promotionService: PromotionService) { }

    ngOnInit() {
        this.featuredDish = this.dishService.getFeaturedDish();
        this.featuredPromotion = this.promotionService.getFeaturedPromotion();
    }

}
