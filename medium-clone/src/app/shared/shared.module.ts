import { PersistanceService } from './services/persistance.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';



@NgModule({
  declarations: [
    BackendErrorMessagesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackendErrorMessagesComponent,
  ],
  providers: [
    PersistanceService,
  ]
})
export class SharedModule { }
