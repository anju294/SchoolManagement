import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (
    route
) => {

    const authService = inject(AuthService);
    const router = inject(Router);
    const userRole = authService.getRole();

    const allowedRoles =
        route.data?.['roles'] as string[];

    if (
        userRole &&
        allowedRoles.includes(userRole)
    ) {
        return true;
    }
    // return allowedRoles.includes(userRole ?? '');
    return router.createUrlTree(['/auth/login']);
};