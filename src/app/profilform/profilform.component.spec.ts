import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilformComponent } from './profilform.component';

describe('ProfilformComponent', () => {
  let component: ProfilformComponent;
  let fixture: ComponentFixture<ProfilformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
