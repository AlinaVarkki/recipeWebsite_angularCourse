import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://foodandnutrition.org/wp-content/uploads/big-bowl-vegetables-1047798504-1-780x520.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://foodandnutrition.org/wp-content/uploads/big-bowl-vegetables-1047798504-1-780x520.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
