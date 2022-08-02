import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ArticleService } from './services/article.service';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { reducers } from './store/reducers';
import { ArticleComponent } from './components/article/article.component';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';

const routes: Routes = [
    {
        path: 'articles/:slug',
        component: ArticleComponent
    }
];

@NgModule({
    declarations: [
        ArticleComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('article', reducers),
        EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    ],
    exports: [
        ArticleComponent,
    ],
    providers: [ArticleService]
})
export class ArticleModule { }
