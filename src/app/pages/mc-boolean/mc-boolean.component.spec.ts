import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McBooleanComponent } from './mc-boolean.component';

describe('McBooleanComponent', () => {
  let component: McBooleanComponent;
  let fixture: ComponentFixture<McBooleanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McBooleanComponent]
    });
    fixture = TestBed.createComponent(McBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
