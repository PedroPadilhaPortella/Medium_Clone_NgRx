import { PopularTagsService } from './services/popular-tags.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { reducers } from './store/reducers';

@NgModule({
    declarations: [
        PopularTagsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        StoreModule.forFeature('popularTags', reducers),
        EffectsModule.forFeature([GetPopularTagsEffect]),
    ],
    providers: [
        PopularTagsService,
    ],
    exports: [
        PopularTagsComponent,
    ]
})
export class PopularTagsModule { }
