import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://foodandnutrition.org/wp-content/uploads/big-bowl-vegetables-1047798504-1-780x520.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://foodandnutrition.org/wp-content/uploads/big-bowl-vegetables-1047798504-1-780x520.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
