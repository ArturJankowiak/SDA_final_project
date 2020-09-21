import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipes } from 'src/app/models/recipes.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  
  recipes: Observable<Recipes[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.recipes = this.httpService.getRecipes();
  }

}
