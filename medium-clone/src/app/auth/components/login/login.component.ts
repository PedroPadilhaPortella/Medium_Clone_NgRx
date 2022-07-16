import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/types/appState.interface';
import { loginAction } from '../../store/actions/login.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selector';
import { BackendErrors } from '../../types/backendErrors.interface';
import { LoginRequest } from '../../types/loginRequest.interface';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrors | null>

    constructor(
        private formBuilder: FormBuilder, 
        private store: Store<AppState>,
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.initializeValues();
    }

    initializeValues(): void {
        this.isSubmitting$  = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }

    createForm(): void {
        this.form = this.formBuilder.group({
            // email: ['', [Validators.required, Validators.email]],
            // password: ['', [Validators.required]],
            email: ['', []],
            password: ['', []],
        });
    }

    onSubmit() {
        if (this.form.valid) {
            const request: LoginRequest = { user: this.form.value }
            this.store.dispatch(loginAction({request}));
        }
    }
}