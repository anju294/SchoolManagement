import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(payload: any) {
        return this.http.post<any>(
            'https://localhost:5001/api/auth/login',
            payload
        );
    }

    saveUser(response: any) {

        localStorage.setItem('token', response.token);

        localStorage.setItem('role', response.role);

        localStorage.setItem(
            'userId',
            response.userId.toString()
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

    isLoggedIn(): boolean {
        const token = this.getToken();

        if (!token) {
            return false;
        }

        // Check JWT expiration

        return true;
    }

    getUserName(): string {
        return localStorage.getItem('userName') ?? '';
    }
}