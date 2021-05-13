import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Vegan chilli',
      'Chilli packs in plenty of vegetables ',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/vegan-chilli-be48585.jpg?quality=90&webp=true&resize=300,272',
      [
        new Ingredient('Veggie', 10),
        new Ingredient('Chilli', 3),
      ]
    ),
    new Recipe(
      'Vegan chickpea curry jacket potatoes',
      'Get some protein into a vegan diet with this tasty chickpea curry jacket',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sweet-potato-curry-46f4bc8.jpg?quality=90&webp=true&resize=300,272',
      [
        new Ingredient('Potato', 4),
        new Ingredient('Chickpeas', 79),
        new Ingredient('Vegan Cheese', 7),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }
}
