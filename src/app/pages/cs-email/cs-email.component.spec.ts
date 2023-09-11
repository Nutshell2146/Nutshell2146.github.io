import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsEmailComponent } from './cs-email.component';

describe('CsEmailComponent', () => {
  let component: CsEmailComponent;
  let fixture: ComponentFixture<CsEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsEmailComponent]
    });
    fixture = TestBed.createComponent(CsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
