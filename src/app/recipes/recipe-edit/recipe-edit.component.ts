import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe-module';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  myForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipesService) { }
  onAddIng() {
    (<FormArray>this.myForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    }))
  }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
      }
    )
    this.initate();
  }

  private initate() {
    let recipeName = '';
    let recipeUrl = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const editIterm = this.recipeService.getRecipeById(this.id);
      recipeName = editIterm.name;
      recipeUrl = editIterm.url;
      recipeDesc = editIterm.desc;
      if(editIterm.ingredients.length !== 0) {
        for(let ingredient of editIterm.ingredients) {
        recipeIngredients.push(new FormGroup({
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }))
      }
    }
    }
    this.myForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'image': new FormControl(recipeUrl),
      'description': new FormControl(recipeDesc),
      'ingredients': recipeIngredients
    })
  }
  onSubmit() {
    console.log(12);
    const newRecipe = new Recipe(
      this.myForm.value['name'], 
      this.myForm.value['description'],
      this.myForm.value['image'],
      this.myForm.value['ingredients']);
      if(!this.editMode) this.recipeService.addRecipe(newRecipe);
      else this.recipeService.updateRecipe(this.id, newRecipe);
      this.onCancel();
  }
  
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onDeleteIng(i: number) {
    (<FormArray>this.myForm.get('ingredients')).removeAt(i);
  }
  getControls() {
    return (<FormArray>this.myForm.get('ingredients')).controls;
  }
}
