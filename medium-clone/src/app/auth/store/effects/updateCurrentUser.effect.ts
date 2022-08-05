import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUser } from '../../../shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from '../actions/updateCurrentUser.action';

@Injectable()
export class UpdateCurrentUserEffect {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) { }

    updateCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(updateCurrentUserAction),
        switchMap(({ currentUser }) => {
            return this.authService.updateCurrentUser(currentUser).pipe(
                map((currentUser: CurrentUser) => {
                    return updateCurrentUserSuccessAction({ currentUser })
                }),
                catchError((errorResponse: HttpErrorResponse) =>
                    of(updateCurrentUserFailureAction({ errors: errorResponse.error.errors })))
            );
        }),
    ));
}