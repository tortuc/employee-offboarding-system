import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dialog-invalid-employee',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, RouterLink],
  templateUrl: './dialog-invalid-employee.component.html',
  styleUrl: './dialog-invalid-employee.component.scss'
})
export class DialogInvalidEmployeeComponent {

}
