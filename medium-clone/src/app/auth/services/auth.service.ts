import { AuthResponse } from './../types/authResponse.interface';
import { environment } from './../../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from './../types/registerRequest.interface';
import { Injectable } from '@angular/core';
import { CurrentUser } from 'src/app/shared/types/currentUser.interface';

@Injectable()
export class AuthService {
    url = environment.baseUrl;
    
    constructor(private http: HttpClient) { }

    register(user: RegisterRequest): Observable<CurrentUser> {
        return this.http.post<AuthResponse>(`${this.url}users`, user)
            .pipe(map(response => response.user));
    }
}
