import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsMemoComponent } from './cs-memo.component';

describe('CsMemoComponent', () => {
  let component: CsMemoComponent;
  let fixture: ComponentFixture<CsMemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsMemoComponent]
    });
    fixture = TestBed.createComponent(CsMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
