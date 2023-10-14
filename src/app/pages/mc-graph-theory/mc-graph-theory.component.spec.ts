import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McGraphTheoryComponent } from './mc-graph-theory.component';

describe('McGraphTheoryComponent', () => {
  let component: McGraphTheoryComponent;
  let fixture: ComponentFixture<McGraphTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McGraphTheoryComponent]
    });
    fixture = TestBed.createComponent(McGraphTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
