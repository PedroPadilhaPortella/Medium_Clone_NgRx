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

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        BackendErrorMessagesComponent,
        TopBarComponent,
        ErrorMessageComponent,
        LoadingComponent,
        PaginationComponent,
        TagListComponent,
    ],
    exports: [
        BackendErrorMessagesComponent,
        TopBarComponent,
        ErrorMessageComponent,
        LoadingComponent,
        PaginationComponent,
        TagListComponent,
    ],
    providers: [
        PersistanceService,
        UtilService,
    ]
})
export class SharedModule { }
