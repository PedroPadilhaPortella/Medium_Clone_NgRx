import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { UserProfileService } from "../../services/user-profile.service";
import { UserProfile } from "../../types/userProfile.interface";
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from "../actions/getUserProfile.action";

@Injectable()
export class GetUserProfileEffect {

    constructor(
        private actions$: Actions,
        private userProfileService: UserProfileService,
    ) { }

    getUserProfile$ = createEffect(() => this.actions$.pipe(
        ofType(getUserProfileAction),
        switchMap(({ slug }) => {
            return this.userProfileService.getUserProfile(slug).pipe(
                map((profile: UserProfile) => {
                    return getUserProfileSuccessAction({ userProfile: profile })
                }),
                catchError(() => of(getUserProfileFailureAction()))
            );
        }),
    ));
}