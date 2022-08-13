import { logoutAction } from './../../store/actions/logout.action';
import { updateCurrentUserAction } from './../../store/actions/updateCurrentUser.action';
import { Observable, filter, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurrentUser } from 'src/app/shared/types/currentUser.interface';
import { currentUserSelector } from '../../store/selectors/authSelector';
import { BackendErrors } from 'src/app/shared/types/backendErrors.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/settingsSelector';
import { CurrentUserInput } from 'src/app/shared/types/currentUserInput.interface';

@Component({
    selector: 'mc-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

    isSubmitting$: Observable<boolean>;
    backendErrrors$: Observable<BackendErrors | null>;
    currentUserSubscription: Subscription;
    currentUser: CurrentUser;
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store,
    ) { }

    ngOnInit(): void {
        this.initializeValues();
        this.initializeListeners();
    }

    initializeValues() {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    initializeListeners(): void {
        this.currentUserSubscription = this.store.pipe(select(currentUserSelector), filter((Boolean)))
            .subscribe((user: CurrentUser) => {
                this.currentUser = user;
                this.initializeForm();
            });
    }

    initializeForm(): void {
        this.form = this.formBuilder.group({
            username: [this.currentUser.username],
            email: [this.currentUser.email],
            bio: [this.currentUser.bio],
            password: [''],
            image: [this.currentUser.image],
        })
    }

    submit(): void {
        const user: CurrentUserInput = {
            ...this.currentUser,
            ...this.form.value
        }

        this.store.dispatch(updateCurrentUserAction({ currentUser: user }));
    }

    logout(): void {
        this.store.dispatch(logoutAction());
    }

    ngOnDestroy(): void {
        this.currentUserSubscription.unsubscribe();
    }
}
