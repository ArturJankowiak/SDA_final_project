import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentParentComponent } from './my-component-parent.component';

describe('MyComponentParentComponent', () => {
  let component: MyComponentParentComponent;
  let fixture: ComponentFixture<MyComponentParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
