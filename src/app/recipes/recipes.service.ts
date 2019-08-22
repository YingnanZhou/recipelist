import { Recipe } from './recipe-module';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import  'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RecipesService{
    
    recipeChanged = new Subject<Recipe[]>();
    recipes: Recipe[] = [
        new Recipe(
        'test1', 
        'this is delicious', 
        'https://i.redd.it/cks2ftlaczgy.jpg',
        [
            new Ingredient('meat', 20),
            new Ingredient('coke', 20)
        ]),
        new Recipe(
            'test1', 
            'this is delicious', 
            'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/2-dog.jpg',
            [
                new Ingredient('girl', 1),
                new Ingredient('paper', 2)
            ])
      
      ];
      constructor(private authService: AuthService, private ShoppingListService: ShoppingListService, private HttpClient: HttpClient) {}
      getRecipes() {
          return this.recipes.slice();
      }
      getRecipeById(id: number) {
          return this.recipes[id];
      }
      addRecipe(recipe: Recipe) {
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, recipe: Recipe) {
          this.recipes[index] = recipe;
          this.recipeChanged.next(this.recipes.slice());
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ShoppingListService.addAll(ingredients);
      }
      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice());
          
      }
      
      saveData() {
        const token = this.authService.getT();
          return this.HttpClient.put('https://ng-recipe-751ed.firebaseio.com/data.json', 
                                    this.recipes,
                                    {
                                        params: new HttpParams().set('auth', token)
                                    }
          );
      }
      getData() {
          const token = this.authService.getT();
          return this.HttpClient.get<Recipe[]>('https://ng-recipe-751ed.firebaseio.com/data.json', 
        {
            
            params: new HttpParams().set('auth', token)
        }).map(
            (recipes) => {
                console.log(recipes);
                for(const recipe of recipes) {
                    if(!recipe['ingredients']) recipe.ingredients = [];
                }
                return recipes;
            }
          );
      }
      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());

      }
}