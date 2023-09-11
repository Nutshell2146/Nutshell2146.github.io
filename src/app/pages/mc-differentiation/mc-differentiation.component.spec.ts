import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McDifferentiationComponent } from './mc-differentiation.component';

describe('McDifferentiationComponent', () => {
  let component: McDifferentiationComponent;
  let fixture: ComponentFixture<McDifferentiationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McDifferentiationComponent]
    });
    fixture = TestBed.createComponent(McDifferentiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
