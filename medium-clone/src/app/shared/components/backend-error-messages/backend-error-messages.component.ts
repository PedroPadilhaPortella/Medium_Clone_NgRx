import { Component, Input, OnInit } from '@angular/core';
import { BackendErrors } from 'src/app/auth/types/backendErrors.interface';

@Component({
    selector: 'mc-backend-error-messages',
    templateUrl: './backend-error-messages.component.html',
    styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
    @Input('backendErrors') backendErrors: BackendErrors;
    errorMessages: string[];

    constructor() { }

    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrors)
            .map((name: string) => {
                const messages = this.backendErrors[name].join(' ');
                return `${name} ${messages}`;
            });
    }
}
