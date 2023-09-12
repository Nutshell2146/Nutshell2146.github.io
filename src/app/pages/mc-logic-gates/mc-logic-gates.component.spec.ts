import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McLogicGatesComponent } from './mc-logic-gates.component';

describe('McLogicGatesComponent', () => {
  let component: McLogicGatesComponent;
  let fixture: ComponentFixture<McLogicGatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McLogicGatesComponent]
    });
    fixture = TestBed.createComponent(McLogicGatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
