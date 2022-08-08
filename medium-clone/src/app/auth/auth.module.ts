import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { LoginEffect } from './store/effects/login.effect';
import { RegisterEffect } from './store/effects/register.effect';
import { UpdateCurrentUserEffect } from './store/effects/updateCurrentUser.effect';
import { authReducers } from './store/reducers/authReducers';
import { SettingsComponent } from './components/settings/settings.component';
import { settingsReducers } from './store/reducers/settingsReducers';
import { LogoutEffect } from './store/effects/logout.effect';

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'settings',
        component: SettingsComponent,
    }
];

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        SettingsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('auth', authReducers),
        StoreModule.forFeature('settings', settingsReducers),
        EffectsModule.forFeature([
            RegisterEffect,
            LoginEffect,
            GetCurrentUserEffect,
            UpdateCurrentUserEffect,
            LogoutEffect,
        ]),
    ],
    exports: [
        RegisterComponent,
        LoginComponent,
        SettingsComponent,
    ],
    providers: [
        AuthService,
    ]
})
export class AuthModule { }
