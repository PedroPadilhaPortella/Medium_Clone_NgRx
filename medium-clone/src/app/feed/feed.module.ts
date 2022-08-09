import { YourFeedComponent } from './components/your-feed/your-feed.component';
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
import { FeedTogglerComponent } from './components/feed-toggler/feed-toggler.component';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { FeedService } from './services/feed.service';
import { FavoriteService } from './services/favorite.service';
import { AddToFavoritesComponent } from './components/add-to-favorites/add-to-favorites.component';
import { AddFavoriteEffect } from './store/effects/addFavorite.effect';

const routes: Routes = [
    {
        path: '',
        component: GlobalFeedComponent,
    },
    {
        path: 'feed',
        component: YourFeedComponent,
    },
    {
        path: 'tags/:slug',
        component: TagFeedComponent,
    },
];

@NgModule({
    declarations: [
        GlobalFeedComponent,
        YourFeedComponent,
        FeedComponent,
        BannerComponent,
        FeedTogglerComponent,
        TagFeedComponent,
        AddToFavoritesComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PopularTagsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('feed', reducers),
        EffectsModule.forFeature([GetFeedEffect, AddFavoriteEffect]),
    ],
    exports: [
        GlobalFeedComponent,
        YourFeedComponent,
        FeedComponent,
        BannerComponent,
        FeedTogglerComponent,
        TagFeedComponent,
        AddToFavoritesComponent,
    ],
    providers: [
        FeedService,
        FavoriteService,
    ]
})
export class FeedModule { }
