import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcsComputerGenComponent } from './ics-computer-gen.component';

describe('IcsComputerGenComponent', () => {
  let component: IcsComputerGenComponent;
  let fixture: ComponentFixture<IcsComputerGenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcsComputerGenComponent]
    });
    fixture = TestBed.createComponent(IcsComputerGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
