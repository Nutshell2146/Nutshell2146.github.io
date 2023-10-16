import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcsNetworkCommunicatingComponent } from './ics-network-communicating.component';

describe('IcsNetworkCommunicatingComponent', () => {
  let component: IcsNetworkCommunicatingComponent;
  let fixture: ComponentFixture<IcsNetworkCommunicatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcsNetworkCommunicatingComponent]
    });
    fixture = TestBed.createComponent(IcsNetworkCommunicatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
