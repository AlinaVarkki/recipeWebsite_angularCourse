import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

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
      ]),
    new Recipe(
      'Dipping Churros',
      'Delicious churros for any time of the day omnomnom',
      'https://violifefoods.com/wp-content/uploads/2021/03/dipping_churros.jpg',
      [
        new Ingredient('coconut oil', 6),
        new Ingredient('all-purpose flour', 400),
        new Ingredient('vanilla extract', 2),
        new Ingredient('Vegetable oil', 7),
        new Ingredient('Ground cinnamon', 5),
        new Ingredient('Violife Cocospread', 1),
        new Ingredient('Coconut milk', 2),
      ]),
    new Recipe(
      'Chocolate Ganache Tartlets',
      'Crush the digestive biscuits into fine crumbs using a blender. Melt the Flora plant butter and add to the digestive mixture. Mix until well combined',
      'https://violifefoods.com/wp-content/uploads/2021/02/ganache-tartlettes.jpg',
      [
        new Ingredient('Packs Violife Cocospread', 2),
        new Ingredient('Vegan digestive type biscuits', 380),
        new Ingredient('Flora plant butter', 220),
        new Ingredient('Full fat coconut milk from a can', 180),
        new Ingredient('Blueberries and raspberries, for topping', 1),
        new Ingredient('Blueberries and raspberries, for topping', 1),
        new Ingredient('Coconut flour, for dusting', 2),
      ]),
    new Recipe(
      'Tacos with Pulled Oumph!',
      'Heat some olive oil in a frying pan and fry the Pulled Oumph! on medium heat, according to pack instructions.',
      'https://violifefoods.com/wp-content/uploads/2021/01/vegan-tacos.jpg',
      [
        new Ingredient('Pack Violife Grated Original', 1),
        new Ingredient('Pack Pulled Oumph!, defrosted', 1),
        new Ingredient('taco shells', 6),
        new Ingredient('Tomato, cubed', 1),
        new Ingredient('Coriander leaves', 10),
        new Ingredient('Avocados', 2),
  ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }
}
