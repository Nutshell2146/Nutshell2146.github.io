import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcsOsiComponent } from './ics-osi.component';

describe('IcsOsiComponent', () => {
  let component: IcsOsiComponent;
  let fixture: ComponentFixture<IcsOsiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcsOsiComponent]
    });
    fixture = TestBed.createComponent(IcsOsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
