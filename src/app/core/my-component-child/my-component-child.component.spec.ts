import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentChildComponent } from './my-component-child.component';

describe('MyComponentChildComponent', () => {
  let component: MyComponentChildComponent;
  let fixture: ComponentFixture<MyComponentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
