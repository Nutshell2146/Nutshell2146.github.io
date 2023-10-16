import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcsNetworkAddressingComponent } from './ics-network-addressing.component';

describe('IcsNetworkAddressingComponent', () => {
  let component: IcsNetworkAddressingComponent;
  let fixture: ComponentFixture<IcsNetworkAddressingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcsNetworkAddressingComponent]
    });
    fixture = TestBed.createComponent(IcsNetworkAddressingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
