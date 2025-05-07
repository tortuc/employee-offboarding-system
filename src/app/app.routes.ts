import { Routes } from '@angular/router';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
    {
        path: 'employees',
        loadComponent: () => EmployeesComponent
    },
    {
        path: 'employees/:id',
        pathMatch: 'full',
        loadComponent: () => EmployeeComponent
    },
    {
        path: '**',
        redirectTo: 'employees'
    }
];
