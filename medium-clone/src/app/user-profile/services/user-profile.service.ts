import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from 'src/app/user-profile/types/userProfile.interface';
import { GetUserProfileResponse } from '../types/getUserProfileResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserProfileService {
    url = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getUserProfile(slug: string): Observable<UserProfile> {
       return this.http.get<GetUserProfileResponse>(`${this.url}profiles/${slug}`)
            .pipe(map(response => response.profile));
    }
}
