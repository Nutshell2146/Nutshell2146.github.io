import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McIntegrationComponent } from './mc-integration.component';

describe('McIntegrationComponent', () => {
  let component: McIntegrationComponent;
  let fixture: ComponentFixture<McIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McIntegrationComponent]
    });
    fixture = TestBed.createComponent(McIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
