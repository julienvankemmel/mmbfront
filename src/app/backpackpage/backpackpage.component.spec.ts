import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackpageComponent } from './backpackpage.component';

describe('BackpackpageComponent', () => {
  let component: BackpackpageComponent;
  let fixture: ComponentFixture<BackpackpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpackpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpackpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
