import { AfterViewInit, Component, effect, inject, signal, ViewChild, WritableSignal } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { IEmployee } from '../shared/models/employee.interface';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { JoinFieldsPipe } from '../shared/pipes/join-fields.pipe';

@Component({
  selector: 'app-employees',
  imports: [
    MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatIconModule, RouterLink, MatSelectModule, FormsModule, JoinFieldsPipe
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements AfterViewInit {
  public readonly employeeService = inject(EmployeeService);
  public readonly router = inject(Router);

  public readonly displayedColumns: string[] = ['name', 'department', 'email', 'equipments', 'status'];
  public readonly isLoading: WritableSignal<boolean> = signal(true);
  public readonly dataSource: MatTableDataSource<IEmployee> = new MatTableDataSource<IEmployee>([]);
  public readonly filterableColumns: Array<keyof IEmployee> = ['name', 'department'];

  @ViewChild(MatPaginator) private readonly paginator!: MatPaginator;
  @ViewChild(MatSort) private readonly sort!: MatSort;
  @ViewChild(MatInput) private readonly input!: MatInput;

  constructor() {    
    this.employeeService.getEmployees()
      .pipe(
        takeUntilDestroyed(),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe();

    effect(() => {
      this.dataSource.data = this.employeeService.employees();
    });
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (row: IEmployee, filter: string) => {

      if (!this.filterableColumns.length) return true;
      else {
        return this.filterableColumns.some(e => {
          return e === 'equipments'
            ? row.equipments.map(e => e.name).join(', ').toLowerCase().includes(filter)
            : (`${row[e]}`?.toLowerCase()?.includes(filter) ?? false)
        })
      }
    }
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
}
