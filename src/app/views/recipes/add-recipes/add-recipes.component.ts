import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss']
})
export class AddRecipesComponent implements OnInit {

  form: FormGroup;


  constructor() { }

  ngOnInit(): void { // formularz z jednym polem = description / formularz zgodny z interfacem 
    this.form = new FormGroup({
      mealType: new FormControl(''),
    })
  }

}



