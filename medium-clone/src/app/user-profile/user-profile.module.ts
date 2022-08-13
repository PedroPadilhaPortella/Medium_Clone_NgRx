import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect';
import { StoreModule } from '@ngrx/store';
import { userProfileReducers } from './store/reducers';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    {
        path: 'profiles/:slug',
        component: UserProfileComponent,
    },
    {
        path: 'profiles/:slug/favorited',
        component: UserProfileComponent,
    },
];

@NgModule({
    declarations: [
        UserProfileComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('user-profile', userProfileReducers),
        EffectsModule.forFeature([GetUserProfileEffect]),
    ],
    exports: [
        UserProfileComponent,
    ],
    providers: [UserProfileService]
})
export class UserProfileModule { }
