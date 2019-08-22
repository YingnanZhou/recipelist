import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
  private subs: Subscription;
  
  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingListService.getIngredients();
    this.subs = this.ShoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }
  onEdit(i: number) {
    this.ShoppingListService.OnEditItem.next(i);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
