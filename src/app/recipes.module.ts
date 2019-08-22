import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeBasicComponent } from './recipes/recipe-basic/recipe-basic.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipes.routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeBasicComponent,
        RecipeEditComponent
    ],
    imports: [
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule
    ]
})
export class RecipeMudule{

}