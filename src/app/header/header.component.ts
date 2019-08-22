import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe-module';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private authService: AuthService, private recipeService: RecipesService, private router: Router) { }

  ngOnInit() {
  }
  onPost() {
    this.recipeService.saveData().subscribe(
      (response) => {
        console.log(response);
      }
    )
  }
  onGet() {
    this.recipeService.getData().subscribe(
      (recipes: Recipe[]) => {this.recipeService.setRecipes(recipes)}
    )
      this.router.navigate(['/recipes']);
  }
  logOut() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
  isAuth() {
    return this.authService.isAuth();
  }
}
