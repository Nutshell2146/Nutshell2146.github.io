import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpStructuresComponent } from './ip-structures.component';

describe('IpStructuresComponent', () => {
  let component: IpStructuresComponent;
  let fixture: ComponentFixture<IpStructuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpStructuresComponent]
    });
    fixture = TestBed.createComponent(IpStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
