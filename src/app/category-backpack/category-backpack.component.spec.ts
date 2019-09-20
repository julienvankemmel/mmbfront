import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBackpackComponent } from './category-backpack.component';

describe('CategoryBackpackComponent', () => {
  let component: CategoryBackpackComponent;
  let fixture: ComponentFixture<CategoryBackpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryBackpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
