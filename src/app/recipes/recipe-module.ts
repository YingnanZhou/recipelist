import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    name: string;
    desc: string;
    url: string;
    ingredients: Ingredient[];
    constructor(name: string, desc: string, url: string, ingredients: Ingredient[]){
        this.name = name;
        this.desc = desc;
        this.url = url;
        this.ingredients = ingredients;
    }
}