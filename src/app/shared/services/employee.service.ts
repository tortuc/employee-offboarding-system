import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IEmployee } from '../models/employee.interface';
import { Observable, tap } from 'rxjs';
import { IOffboard } from '../models/offboard.interface';
import { Status } from '../models/status.enum';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly httpClient = inject(HttpClient);

  public readonly employees: WritableSignal<IEmployee[]> = signal([]);

  public getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(`${environment.apiUrl}/employees`)
      .pipe(tap((employees) => this.employees.set(employees)));
  }

  public getEmployee(id: string): Observable<IEmployee> {
    return this.httpClient.get<IEmployee>(`${environment.apiUrl}/employees/${id}`);
  }

  public offboardEmployee(id: string, offboardData: IOffboard): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiUrl}/employees/${id}/offboard`, offboardData)
      .pipe(
        tap(() => {
          this.employees.update(employees => {
            const index = employees.findIndex(e => e.id === id);
            employees[index] = {...employees[index], status: Status.OFFBOARDED};
            return employees;
          });
        })
      );
  }
}
