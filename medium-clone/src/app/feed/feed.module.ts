import { PopularTagsModule } from './../popular-tags/popular-tags.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { FeedComponent } from './components/feed/feed.component';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { reducers } from './store/reducers';

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
        BannerComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PopularTagsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('feed', reducers),
        EffectsModule.forFeature([GetFeedEffect]),
    ],
    exports: [
        GlobalFeedComponent,
        FeedComponent,
        BannerComponent,
    ]
})
export class FeedModule { }
