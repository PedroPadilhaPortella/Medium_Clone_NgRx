import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { FeedModule } from './../feed/feed.module';
import { ReducersEnum } from './../shared/enums/reducers.enum';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect';
import { userProfileReducers } from './store/reducers';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';

const routes: Routes = [
    {
        path: 'profiles/:slug',
        component: UserProfileComponent,
    },
    {
        path: 'profiles/:slug/favorites',
        component: UserProfileComponent,
    },
];

@NgModule({
    declarations: [
        UserProfileComponent,
        FollowButtonComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FeedModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(ReducersEnum.USER_PROFILE, userProfileReducers),
        EffectsModule.forFeature([GetUserProfileEffect]),
    ],
    exports: [
        UserProfileComponent,
    ],
    providers: [UserProfileService]
})
export class UserProfileModule { }
