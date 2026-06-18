import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    {
         path: '',
        component: MainLayout,
        children: [
            {
                path: 'students',
                loadChildren: () => import('./modules/students/students.routes').then(m => m.STUDENT_ROUTES)
            },
            {
                path: 'attendance',
                loadChildren: () => import('./modules/attendance/attendance.routes').then(m => m.ATTENDANCE_ROUTES)
            },
            {
                path: 'fees',
                loadChildren: () => import('./modules/fees/fees.routes').then(m => m.FEES_ROUTES)
            }
        ]
    }
];
