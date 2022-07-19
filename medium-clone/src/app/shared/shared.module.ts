import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PersistanceService } from './services/persistance.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        BackendErrorMessagesComponent,
        TopBarComponent,
    ],
    exports: [
        BackendErrorMessagesComponent,
        TopBarComponent,
    ],
    providers: [
        PersistanceService,
    ]
})
export class SharedModule { }
