import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl =
        `${environment.apiUrl}/Auth`;
    constructor(private http: HttpClient) { }

    // login(payload: any) {
    //     return this.http.post<any>(
    //         'https://localhost:5001/api/auth/login',
    //         payload
    //     );
    // }
    login(
        request: LoginRequest
    ): Observable<LoginResponse> {

        const headers =
            new HttpHeaders({

                'X-Tenant-Code':
                    request.tenantCode
            });

        return this.http.post<LoginResponse>(

            `${this.apiUrl}/login`,

            request,

            { headers }
        );
    }

    // saveUser(response: any) {

    //     localStorage.setItem('token', response.token);

    //     localStorage.setItem('role', response.role);

    //     localStorage.setItem(
    //         'userId',
    //         response.userId.toString()
    //     );
    // }

    saveUser(
        response: LoginResponse
    ): void {

        localStorage.setItem(
            'accessToken',
            response.accessToken
        );

        localStorage.setItem(
            'refreshToken',
            response.refreshToken
        );

        localStorage.setItem(
            'userId',
            response.userId.toString()
        );

        localStorage.setItem(
            'userName',
            response.userName
        );

        localStorage.setItem(
            'roles',
            JSON.stringify(response.roles)
        );

        localStorage.setItem(
            'permissions',
            JSON.stringify(response.permissions)
        );
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    getRole(): string | null {
        return localStorage.getItem('role');
    }

    logout(): void {

        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userName');
    }
    getUserId(): number {
        return Number(
            localStorage.getItem('userId')
        );
    }

    // isLoggedIn(): boolean {
    //     const token = this.getToken();

    //     if (!token) {
    //         return false;
    //     }

    //     // Check JWT expiration

    //     return true;
    // }


    isLoggedIn(): boolean {

        return !!localStorage.getItem(
            'accessToken'
        );
    }

    getUserName(): string {
        return localStorage.getItem('userName') ?? '';
    }

    getCurrentUser() {

        return {

            userId:
                Number(
                    localStorage.getItem('userId')
                ),

            userName:
                localStorage.getItem('userName') ?? '',

            roles:
                JSON.parse(
                    localStorage.getItem('roles') ?? '[]'
                ),

            permissions:
                JSON.parse(
                    localStorage.getItem('permissions') ?? '[]'
                )
        };
    }

    hasRole(
        role: string
    ): boolean {

        const roles =
            JSON.parse(
                localStorage.getItem('roles')
                ?? '[]'
            );

        return roles.includes(role);
    }

    hasPermission(
        permission: string
    ): boolean {

        const permissions =
            JSON.parse(
                localStorage.getItem('permissions')
                ?? '[]'
            );

        return permissions.includes(
            permission
        );
    }
    getAccessToken(): string {

        return localStorage.getItem(
            'accessToken'
        ) ?? '';
    }

    getRefreshToken(): string {

        return localStorage.getItem(
            'refreshToken'
        ) ?? '';
    }
}