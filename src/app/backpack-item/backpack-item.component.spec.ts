import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackItemComponent } from './backpack-item.component';

describe('BackpackItemComponent', () => {
  let component: BackpackItemComponent;
  let fixture: ComponentFixture<BackpackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
