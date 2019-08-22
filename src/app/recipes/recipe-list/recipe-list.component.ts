import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-module';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[];
  
  constructor(private RecipesService: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.RecipesService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
      this.recipes = this.RecipesService.recipes;
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
