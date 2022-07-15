import { CurrentUser } from './../../../shared/types/currentUser.interface';
import { AuthService } from './../../services/auth.service';
import { registerAction, registerSuccessAction, registerFailureAction } from './../actions/register.action';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map,  of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterEffect {

    constructor(private actions$: Actions, private authService: AuthService) { }

    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({ request }) => {
            return this.authService.register(request).pipe(
                map((currentUser: CurrentUser) => registerSuccessAction({currentUser})),
                catchError((errorResponse: HttpErrorResponse) => 
                    of(registerFailureAction({errors: errorResponse.error.errors})))
            );
        }),
    ));
}