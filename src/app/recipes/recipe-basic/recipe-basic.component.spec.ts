import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBasicComponent } from './recipe-basic.component';

describe('RecipeBasicComponent', () => {
  let component: RecipeBasicComponent;
  let fixture: ComponentFixture<RecipeBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
