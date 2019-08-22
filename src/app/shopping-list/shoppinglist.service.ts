import { Ingredient }  from "../shared/ingredient.model"
import { Subject } from 'rxjs';
export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    OnEditItem = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 15)
      ];
      getIngredients(){
          return this.ingredients.slice();
      }
      getIngredientById(index: number) {
        return this.ingredients[index];
      }
      addIngredient(newIngredient: Ingredient) {
          this.ingredients.push(newIngredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      delete(id: number) {
        this.ingredients.splice(id, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      addAll(ingredients: Ingredient[]) {
          
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      upDate(id: number, NewItem: Ingredient) {
        this.ingredients[id] = NewItem;
        this.ingredientsChanged.next(this.ingredients.slice())
      }
     
}