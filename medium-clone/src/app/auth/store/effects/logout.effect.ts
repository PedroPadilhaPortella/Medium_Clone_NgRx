import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from 'rxjs';
import { PersistanceKey } from 'src/app/shared/types/persistanceKey';
import { PersistanceService } from '../../../shared/services/persistance.service';
import { logoutAction } from './../actions/logout.action';

@Injectable()
export class LogoutEffect {

    constructor(
        private actions$: Actions,
        private persistanceService: PersistanceService,
        private router: Router,
    ) { }

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
            this.persistanceService.remove(PersistanceKey.ACCESS_TOKEN);
            this.router.navigateByUrl('/');
        })
    ), { dispatch: false });
}