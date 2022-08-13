import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'This is recipe description',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg'
    ),
    new Recipe(
      'Another Recipe',
      'This is recipe description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecepieSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
