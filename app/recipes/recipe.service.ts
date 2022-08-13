import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes-list/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First Recipe', 'Description', 'image'),
    new Recipe('Second Recipe', 'Description', 'image'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
