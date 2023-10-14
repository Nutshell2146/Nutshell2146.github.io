import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsLettersComponent } from './cs-letters.component';

describe('CsLettersComponent', () => {
  let component: CsLettersComponent;
  let fixture: ComponentFixture<CsLettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsLettersComponent]
    });
    fixture = TestBed.createComponent(CsLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
