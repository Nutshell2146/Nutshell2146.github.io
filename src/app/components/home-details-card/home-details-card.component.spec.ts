import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailsCardComponent } from './home-details-card.component';

describe('HomeDetailsCardComponent', () => {
  let component: HomeDetailsCardComponent;
  let fixture: ComponentFixture<HomeDetailsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDetailsCardComponent]
    });
    fixture = TestBed.createComponent(HomeDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
