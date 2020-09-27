import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecipesComponent } from './recipes/add-recipes/add-recipes.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AddRecipeItemComponent } from './recipes/add-recipe-item/add-recipe-item.component';


@NgModule({
    declarations: [RecipesComponent, AddRecipesComponent, AddRecipeItemComponent, AddRecipeItemComponent],
    exports: [RecipesComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule]
  })
  export class ViewsModule {}