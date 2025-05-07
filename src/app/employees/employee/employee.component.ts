import { AfterViewInit, Component, inject, signal, ViewChild, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../../shared/services/employee.service';
import { IEmployee } from '../../shared/models/employee.interface';
import { MatCardModule } from '@angular/material/card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogOffboardComponent } from './dialog-offboard/dialog-offboard.component';
import { filter, finalize, first } from 'rxjs';
import { Status } from '../../shared/models/status.enum';
import { DialogInvalidEmployeeComponent } from './dialog-invalid-employee/dialog-invalid-employee.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-employee',
  imports: [
    RouterLink, MatButtonModule, MatIconModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatPaginatorModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements AfterViewInit {
  public readonly employeeService = inject(EmployeeService);
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);

  public readonly Status = Status;
  public readonly displayedColumns: string[] = ['name'];
  public readonly isLoading: WritableSignal<boolean> = signal(true);
  public readonly dataSource: MatTableDataSource<{id: string; name: string}> = new MatTableDataSource<{id: string; name: string}>([]);
  public readonly employee: WritableSignal<IEmployee | undefined> = signal(undefined);

  @ViewChild(MatPaginator) private readonly paginator!: MatPaginator;
  @ViewChild(MatInput) private readonly input!: MatInput;

  constructor() {
    this.employeeService.getEmployee(this.route.snapshot.params['id'])
      .pipe(takeUntilDestroyed(), finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: res => {
          this.employee.set(res);
          this.dataSource.data = this.employee()?.equipments.map(e => ({id: e.id, name: e.name})) ?? [];
        },
        error: () => this.dialog.open(DialogInvalidEmployeeComponent)
      });
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public clearFilter(): void {
    this.input.value = '';
    this.applyFilter();
  }

  public applyFilter(): void {
    const filterValue = this.input.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openOffboardDialog(): void {
    const dialogRef = this.dialog.open(DialogOffboardComponent, {data: this.employee(), disableClose: true});
    dialogRef.afterClosed()
      .pipe(first(), filter(isUpdated => !!isUpdated))
      .subscribe(() => this.employee.update(e => ({...e, status: Status.OFFBOARDED} as IEmployee)));
  }
}
