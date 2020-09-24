import { Meals } from './../../models/meals.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  meals: Observable<Meals[]>;

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.meals = this.mealService.getMeals();
  }

}