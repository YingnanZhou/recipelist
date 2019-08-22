import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'shoppingList', loadChildren: './shoppinglist.module#ShoppingListModule'}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}