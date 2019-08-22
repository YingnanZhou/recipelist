import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeBasicComponent } from './recipes/recipe-basic/recipe-basic.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AuthGuard } from './auth.guard.service';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const recipeRoutes: Routes = [
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeBasicComponent},
        {path: 'new', component: RecipeEditComponent, canActivate:[AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate:[AuthGuard]}
        
    ]}
]
@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule],
    providers:[AuthGuard]
})
export class RecipeRoutingModule{

}