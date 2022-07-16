import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrentUser } from 'src/app/shared/types/currentUser.interface';
import { environment } from './../../../environments/environment';
import { AuthResponse } from './../types/authResponse.interface';
import { LoginRequest } from './../types/loginRequest.interface';
import { RegisterRequest } from './../types/registerRequest.interface';

@Injectable()
export class AuthService {
    url = environment.baseUrl;

    constructor(private http: HttpClient) { }

    register(user: RegisterRequest): Observable<CurrentUser> {
        return this.http.post<AuthResponse>(`${this.url}users`, user)
            .pipe(map(response => response.user));
    }

    login(user: LoginRequest): Observable<CurrentUser> {
        return this.http.post<AuthResponse>(`${this.url}users/login`, user)
            .pipe(map(response => response.user));
    }

    getCurrentUser(): Observable<CurrentUser> {
        return this.http.get<AuthResponse>(`${this.url}user`)
            .pipe(map(response => response.user));
    }
}