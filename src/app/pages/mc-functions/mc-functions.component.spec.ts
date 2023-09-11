import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McFunctionsComponent } from './mc-functions.component';

describe('McFunctionsComponent', () => {
  let component: McFunctionsComponent;
  let fixture: ComponentFixture<McFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McFunctionsComponent]
    });
    fixture = TestBed.createComponent(McFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
