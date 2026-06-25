import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'auth/login',
    //     pathMatch: 'full'
    // },
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/auth/auth.routes')
                .then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        component: MainLayout,
        canActivate: [authGuard],
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
