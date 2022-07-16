import { PersistanceService } from './../../../shared/services/persistance.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUser } from '../../../shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { getCurrentUserAction } from '../actions/getCurrentUser.action';
import { getCurrentUserFailureAction, getCurrentUserSuccessAction } from './../actions/getCurrentUser.action';
import { PersistanceKey } from 'src/app/shared/types/persistanceKey';

@Injectable()
export class GetCurrentUserEffect {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService,
    ) { }

    getCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(getCurrentUserAction),
        switchMap(() => {
            const token = this.persistanceService.get(PersistanceKey.ACCESS_TOKEN);
            
            if (!token) {
                return of(getCurrentUserFailureAction());
            }
            
            return this.authService.getCurrentUser().pipe(
                map((currentUser: CurrentUser) => {
                    return getCurrentUserSuccessAction({ currentUser })
                }),
                catchError(() => of(getCurrentUserFailureAction()))
            );
        }),
    ));
}