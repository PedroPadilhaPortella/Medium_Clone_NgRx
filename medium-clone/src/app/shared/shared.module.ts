import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PersistanceService } from './services/persistance.service';
import { UtilService } from './services/util.service';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        BackendErrorMessagesComponent,
        TopBarComponent,
        ErrorMessageComponent,
        LoadingComponent,
        PaginationComponent,
        TagListComponent,
        ArticleFormComponent,
    ],
    exports: [
        BackendErrorMessagesComponent,
        TopBarComponent,
        ErrorMessageComponent,
        LoadingComponent,
        PaginationComponent,
        TagListComponent,
        ArticleFormComponent,
    ],
    providers: [
        PersistanceService,
        UtilService,
    ]
})
export class SharedModule { }
