import { GetFeedEffect } from './store/effects/getFeed.effect';
import { FeedComponent } from './components/feed/feed.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
    {
        path: '',
        component: GlobalFeedComponent,
    },
];

@NgModule({
    declarations: [
        GlobalFeedComponent,
        FeedComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        SharedModule,
        StoreModule.forFeature('feed', reducers),
        EffectsModule.forFeature([GetFeedEffect]),
    ],
    exports: [
        GlobalFeedComponent,
        FeedComponent,
    ]
})
export class FeedModule { }
