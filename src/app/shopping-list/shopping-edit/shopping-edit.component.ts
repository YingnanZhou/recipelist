import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  editMode = false;
  editItem: Ingredient;
  EditIndex: number;
  @ViewChild('f') form: NgForm;
  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ShoppingListService.OnEditItem.subscribe(
      (id: number) => {
        this.EditIndex = id;
        this.editMode = true;
        this.editItem = this.ShoppingListService.getIngredientById(id);
        this.form.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    )
  }
  onDelete() {
    this.ShoppingListService.delete(this.EditIndex);
    this.onClear();
  }
  onClear() {
    this.form.reset();
    this.editMode = false;
  }
  onSave(form: NgForm){
   if(this.editMode === false) { 
   this.ShoppingListService.addIngredient(new Ingredient(
        form.value.name,
        form.value.amount
   ))
   }else {
     //console.log(12);
     this.ShoppingListService.upDate(this.EditIndex, new Ingredient(
      form.value.name,
      form.value.amount
 ));
   }
   this.onClear();
}
}

