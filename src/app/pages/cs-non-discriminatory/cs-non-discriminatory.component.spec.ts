import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsNonDiscriminatoryComponent } from './cs-non-discriminatory.component';

describe('CsNonDiscriminatoryComponent', () => {
  let component: CsNonDiscriminatoryComponent;
  let fixture: ComponentFixture<CsNonDiscriminatoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsNonDiscriminatoryComponent]
    });
    fixture = TestBed.createComponent(CsNonDiscriminatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
