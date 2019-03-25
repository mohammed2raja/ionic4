import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id : "r1",
      title: "Schnitzel",
      imageUrl: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
      ingredients: ['Frensh Fries', 'periperi']
    },
    {
      id : "r2",
      title: "Biryani",
      imageUrl: "https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      ingredients: ['Chicken', 'Basmati Rice']
    },
    {
      id : "r3",
      title: "Grill Chicken",
      imageUrl: "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80",
      ingredients: ['Chicken', 'Olive oil', 'Salad', 'Butter']
    },

  ];
  constructor() { }
  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
