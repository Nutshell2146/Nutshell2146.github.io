import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McCountingComponent } from './mc-counting.component';

describe('McCountingComponent', () => {
  let component: McCountingComponent;
  let fixture: ComponentFixture<McCountingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McCountingComponent]
    });
    fixture = TestBed.createComponent(McCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
