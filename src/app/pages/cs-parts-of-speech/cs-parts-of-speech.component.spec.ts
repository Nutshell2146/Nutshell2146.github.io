import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPartsOfSpeechComponent } from './cs-parts-of-speech.component';

describe('CsPartsOfSpeechComponent', () => {
  let component: CsPartsOfSpeechComponent;
  let fixture: ComponentFixture<CsPartsOfSpeechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsPartsOfSpeechComponent]
    });
    fixture = TestBed.createComponent(CsPartsOfSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
