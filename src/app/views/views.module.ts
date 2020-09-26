import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
    declarations: [RecipesComponent],
    exports: [RecipesComponent],
    imports: [CommonModule] // FormsModule, ReactiveFormsModule//]
  })
  export class ViewsModule {}