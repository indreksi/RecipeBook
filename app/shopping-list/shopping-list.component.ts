import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../addons/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Incredient one', 3),
    new Ingredient('Incredient Two', 10),
  ];

  constructor() {}

  ngOnInit(): void {}
}
