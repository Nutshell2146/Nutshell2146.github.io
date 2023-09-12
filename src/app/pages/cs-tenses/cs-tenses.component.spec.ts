import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTensesComponent } from './cs-tenses.component';

describe('CsTensesComponent', () => {
  let component: CsTensesComponent;
  let fixture: ComponentFixture<CsTensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsTensesComponent]
    });
    fixture = TestBed.createComponent(CsTensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
