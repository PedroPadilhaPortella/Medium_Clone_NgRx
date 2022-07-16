import { RouterModule } from '@angular/router';
import { PersistanceService } from './services/persistance.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

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
