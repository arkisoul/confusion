import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';

import { DishService } from '../services/dish.service';

@Component({
    selector: 'app-dishdetail',
    templateUrl: './dishdetail.component.html',
    styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish: Dish;
    dishcopy = null;
    dishIds: number[];
    prev: number;
    next: number;
    commentForm: FormGroup;
    comment: Comment;
    errMess: string;
    formErrors: any = {
        'author': '',
        'comment': ''
    };
    validationMessages: any = {
        'author': {
            'required': 'Author name is required.',
            'minlength': 'Author name must be at least 2 characters long.'
        },
        'comment': {
            'required': 'Comment is required.'
        }
    }

    constructor(
        private dishService: DishService,
        private route: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder,
        @Inject('BaseURL') private BaseURL) {
        this.createForm();
    }

    ngOnInit() {
       this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
       this.route.params
         .switchMap((params: Params) => this.dishService.getDish(+params['id']))
         .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); },
                    errmess => { this.dish = null; this.errMess = errmess });
     }

     setPrevNext(dishId: number) {
       let index:number = this.dishIds.indexOf(dishId);
       this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
       this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
     }

    goBack(): void {
        this.location.back();
    }

    createForm(): void {
        this.commentForm = this.fb.group({
            rating: 5,
            author: ['', [Validators.required, Validators.minLength(2)]],
            comment: ['', Validators.required],
            // date: ''
        });

        this.commentForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }

    onValueChanged(data?: any): void {
        if(!this.commentForm) { return; }
        const form = this.commentForm;
        for(const field in this.formErrors) {
            // Clear form errors (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && control.invalid) {
                const messages = this.validationMessages[field];
                for(const key in control.errors) {
                    this.formErrors[field] = messages[key] + ' ';
                }
            }
        }
    }

    onSubmit(): void {
        this.comment = this.commentForm.value;
        this.comment.date = new Date().toISOString();
        this.dishcopy.comments.push(this.comment);
        this.dishcopy.save()
            .subscribe(dish => this.dish = dish);
        this.commentForm.reset({
            rating: 5,
            author: '',
            comment: '',
        });
    }

}
