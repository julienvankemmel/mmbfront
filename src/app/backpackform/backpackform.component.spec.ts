import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackformComponent } from './backpackform.component';

describe('BackpackformComponent', () => {
  let component: BackpackformComponent;
  let fixture: ComponentFixture<BackpackformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpackformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpackformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
