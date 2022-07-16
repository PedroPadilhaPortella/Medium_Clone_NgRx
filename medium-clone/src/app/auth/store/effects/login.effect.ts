import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PersistanceKey } from 'src/app/shared/types/persistanceKey';
import { PersistanceService } from '../../../shared/services/persistance.service';
import { CurrentUser } from '../../../shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { loginAction, loginFailureAction, loginSuccessAction } from './../actions/login.action';

@Injectable()
export class LoginEffect {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService,
        private router: Router,
    ) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginAction),
        switchMap(({ request }) => {
            return this.authService.login(request).pipe(
                map((currentUser: CurrentUser) => {
                    this.persistanceService.set(PersistanceKey.ACCESS_TOKEN, currentUser.token);
                    return loginSuccessAction({ currentUser })
                }),
                catchError((errorResponse: HttpErrorResponse) =>
                    of(loginFailureAction({ errors: errorResponse.error.errors })))
            );
        }),
    ));

    loginAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
            this.router.navigateByUrl('/');
        }),
    ), { dispatch: false });
}