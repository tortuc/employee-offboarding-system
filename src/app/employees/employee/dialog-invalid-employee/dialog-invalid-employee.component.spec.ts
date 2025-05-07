import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInvalidEmployeeComponent } from './dialog-invalid-employee.component';

describe('DialogInvalidEmployeeComponent', () => {
  let component: DialogInvalidEmployeeComponent;
  let fixture: ComponentFixture<DialogInvalidEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogInvalidEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInvalidEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
