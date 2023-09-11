import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFormalLanguageComponent } from './cs-formal-language.component';

describe('CsFormalLanguageComponent', () => {
  let component: CsFormalLanguageComponent;
  let fixture: ComponentFixture<CsFormalLanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsFormalLanguageComponent]
    });
    fixture = TestBed.createComponent(CsFormalLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
