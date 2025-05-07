import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, delay, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IEmployee } from '../models/employee.interface';
import { employeesData } from '../fakeDB/employees.db';
import { Status } from '../models/status.enum';

export const employeeInterceptor: HttpInterceptorFn = (req, next) => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employeesData));
    }

    const employees = JSON.parse(localStorage.getItem('employees') || '[]');

    if (req.method === 'GET' && req.url === `${environment.apiUrl}/employees`) {
        return of(new HttpResponse({status: 200, body: employees}))
            .pipe(delay(500));
    }

    if (req.method === 'GET' && req.url?.match(new RegExp(`${environment.apiUrl}/employees/\\d+`))) {
        const id = extractIdFromUrl(req.url || '');
        const index = employees.findIndex((e: IEmployee) => e.id === id);

        if (index < 0) {
            return throwError(() => new HttpErrorResponse({status: 404, error: 'Employee not found'}));
        }
        return of(new HttpResponse({status: 200, body: employees.find((e: IEmployee) => e.id === id)}))
            .pipe(delay(500));
    }

    if (req.method === 'POST' && req.url?.match(new RegExp(`${environment.apiUrl}/employees/\\d+/offboard`))) {
        const id = extractIdFromUrl(req.url || '');
        const index = employees.findIndex((e: IEmployee) => e.id === id);
        employees[index] = {...employees[index], status: Status.OFFBOARDED};
        
        return of(new HttpResponse({status: 204, body: employees[index]}))
            .pipe(
                tap(() => localStorage.setItem('employees', JSON.stringify(employees))),
                delay(500)
            );
    }

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => throwError(() => error))
    );
};

const extractIdFromUrl = (url: string): string => {
    const matches = url.match(new RegExp(`${environment.apiUrl}/employees/\\d+`));
    return matches?.[0].split('/').pop() || '';
};