import { ReducersEnum } from './../shared/enums/reducers.enum';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './components/article/article.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { AddToFavoritesComponent } from '../feed/components/add-to-favorites/add-to-favorites.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ArticleService } from './services/article.service';
import { FavoriteService } from '../feed/services/favorite.service';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';
import { createArticleReducers } from './store/reducers/createArticleReducers';
import { getArticlesReducers } from './store/reducers/getArticleReducers';
import { editArticleReducers } from './store/reducers/updateArticleReducers';
import { CommentsComponent } from './components/comments/comments.component';
import { CreateCommentEffect } from './store/effects/createComment.effect';
import { DeleteCommentEffect } from './store/effects/deleteComment.effect';
import { GetCommentEffect } from './store/effects/getComment.effect';
import { createCommentReducers } from './store/reducers/createCommentReducers';
import { getCommentReducers } from './store/reducers/getCommentReducers';

const routes: Routes = [
    {
        path: 'articles/new',
        component: CreateArticleComponent
    },
    {
        path: 'articles/:slug/edit',
        component: EditArticleComponent,
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
        CommentsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(ReducersEnum.ARTICLE, getArticlesReducers),
        StoreModule.forFeature(ReducersEnum.CREATE_ARTICLE, createArticleReducers),
        StoreModule.forFeature(ReducersEnum.EDIT_ARTICLE, editArticleReducers),
        StoreModule.forFeature(ReducersEnum.COMMENT, getCommentReducers),
        StoreModule.forFeature(ReducersEnum.CREATE_COMMENT, createCommentReducers),
        EffectsModule.forFeature([
            GetArticleEffect,
            CreateArticleEffect,
            UpdateArticleEffect,
            DeleteArticleEffect,
            GetCommentEffect,
            CreateCommentEffect,
            DeleteCommentEffect,
        ]),
    ],
    exports: [
        ArticleComponent,
        CreateArticleComponent,
        EditArticleComponent,
        CommentsComponent,
    ],
    providers: [
        ArticleService,
    ]
})
export class ArticleModule { }
