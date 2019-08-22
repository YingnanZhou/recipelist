import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-module';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private authService: AuthService, private RecipesService: RecipesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.RecipesService.getRecipeById(this.id);
      }
    )
    
  }
  addToShoppingList() {
    this.RecipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe() {
    this.RecipesService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  isAuth() {
    return this.authService.isAuth();
  }
}
