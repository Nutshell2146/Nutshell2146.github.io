import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcsNetworkDesignComponent } from './ics-network-design.component';

describe('IcsNetworkDesignComponent', () => {
  let component: IcsNetworkDesignComponent;
  let fixture: ComponentFixture<IcsNetworkDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcsNetworkDesignComponent]
    });
    fixture = TestBed.createComponent(IcsNetworkDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
