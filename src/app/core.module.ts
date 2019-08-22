import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.moudle';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';
import { RecipesService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shoppinglist.service';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent,
        AppRoutingModule
    ],
    providers: [ShoppingListService, RecipesService, AuthService]
})
export class CoreModule{}