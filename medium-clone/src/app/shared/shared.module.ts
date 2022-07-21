import { UtilService } from './services/util.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PersistanceService } from './services/persistance.service';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PaginationComponent } from './components/pagination/pagination.component';

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
    ],
    exports: [
        BackendErrorMessagesComponent,
        TopBarComponent,
        ErrorMessageComponent,
        LoadingComponent,
        PaginationComponent,
    ],
    providers: [
        PersistanceService,
        UtilService,
    ]
})
export class SharedModule { }
