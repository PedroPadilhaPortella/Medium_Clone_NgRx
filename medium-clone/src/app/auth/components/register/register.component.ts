import { RegisterRequest } from './../../types/registerRequest.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/types/appState.interface';
import { isSubmittingSelector } from '../../store/selector';
import { registerAction } from '../../store/actions/register.action';

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;

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
    }

    createForm(): void {
        this.form = this.formBuilder.group({
            // username: ['', [Validators.required]],
            // email: ['', [Validators.required, Validators.email]],
            // password: ['', [Validators.required]],
            username: ['', []],
            email: ['', []],
            password: ['', []],
        });
    }

    onSubmit() {
        if (this.form.valid) {
            const request: RegisterRequest = { user: this.form.value }
            this.store.dispatch(registerAction({request}));
        }
    }

}
