import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './components/article/article.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ArticleService } from './services/article.service';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { createArticleReducers } from './store/reducers/createArticleReducers';
import { getArticlesReducers } from './store/reducers/getArticleReducers';

const routes: Routes = [
    {
        path: 'articles/new',
        component: CreateArticleComponent
    },
    {
        path: 'articles/:slug',
        component: ArticleComponent
    }
];

@NgModule({
    declarations: [
        ArticleComponent,
        CreateArticleComponent,
        EditArticleComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('article', getArticlesReducers),
        StoreModule.forFeature('createArticle', createArticleReducers),
        EffectsModule.forFeature([GetArticleEffect, CreateArticleEffect, DeleteArticleEffect]),
    ],
    exports: [
        ArticleComponent,
        CreateArticleComponent,
        EditArticleComponent,
    ],
    providers: [ArticleService]
})
export class ArticleModule { }
