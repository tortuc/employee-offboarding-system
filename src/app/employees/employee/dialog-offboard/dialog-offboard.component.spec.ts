import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOffboardComponent } from './dialog-offboard.component';

describe('DialogOffboardComponent', () => {
  let component: DialogOffboardComponent;
  let fixture: ComponentFixture<DialogOffboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOffboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOffboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
