import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcsNetworkingIntroComponent } from './ics-networking-intro.component';

describe('IcsNetworkingIntroComponent', () => {
  let component: IcsNetworkingIntroComponent;
  let fixture: ComponentFixture<IcsNetworkingIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcsNetworkingIntroComponent]
    });
    fixture = TestBed.createComponent(IcsNetworkingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
