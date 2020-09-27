import { RecipesComponent } from './views/recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipesComponent } from './views/recipes/add-recipes/add-recipes.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent},
  { path: '', component: RecipesComponent},
  { path: 'add-recipes', component: AddRecipesComponent},
  //{ path: '', redirectTo: './views/recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
