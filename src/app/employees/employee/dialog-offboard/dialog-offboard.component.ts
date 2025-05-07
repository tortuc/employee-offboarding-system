import { Component, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormValidators } from '../../../shared/validators/form-validators.validators';
import { EmployeeService } from '../../../shared/services/employee.service';
import { IOffboard } from '../../../shared/models/offboard.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-offboard',
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './dialog-offboard.component.html',
  styleUrl: './dialog-offboard.component.scss'
})
export class DialogOffboardComponent {
  public readonly employeeService = inject(EmployeeService);
  private readonly dialogRef = inject(MatDialogRef<DialogOffboardComponent>);
  private readonly employeeId = inject(MAT_DIALOG_DATA).id;
  private readonly destroyRef = inject(DestroyRef);
  private readonly snackBar = inject(MatSnackBar);

  public readonly isLoading: WritableSignal<boolean> = signal(false);
  public readonly formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, FormValidators.isEmail]),
    phone: new FormControl('', [Validators.required, FormValidators.isPhoneNumber]),
    note: new FormControl('', [Validators.required]),
    address: new FormGroup({
      receiver: new FormControl('', [Validators.required]),
      streetLine1: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
    })
  });     

  get receiverFormControl(): FormControl {
    return this.formGroup.get('address.receiver') as FormControl;
  }

  public onConfirm(): void {
    if (this.formGroup.invalid) return;
    this.isLoading.set(true);
    this.formGroup.disable();
    this.employeeService.offboardEmployee(this.employeeId, this.formGroup.getRawValue() as IOffboard)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe({
        next: () => {
          this.snackBar.open(
            'Employee offboarded successfully',
            'Close',
            {
              duration: 2000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['success-snackbar']
            }
          );
          this.dialogRef.close(true)
        },
        error: () => {
          this.snackBar.open(
            'Error offboarding employee',
            'Close',
            {
              duration: 2000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['error-snackbar']
            }
          );
        }
      });
  }
}
