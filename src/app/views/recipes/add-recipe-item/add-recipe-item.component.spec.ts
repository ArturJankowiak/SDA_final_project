import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeItemComponent } from './add-recipe-item.component';

describe('AddRecipeItemComponent', () => {
  let component: AddRecipeItemComponent;
  let fixture: ComponentFixture<AddRecipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
