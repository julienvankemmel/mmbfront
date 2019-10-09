import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripformComponent } from './tripform.component';

describe('TripformComponent', () => {
  let component: TripformComponent;
  let fixture: ComponentFixture<TripformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
