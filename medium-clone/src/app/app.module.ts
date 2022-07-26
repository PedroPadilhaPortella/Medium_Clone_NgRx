import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment.prod';
import { AuthModule } from './auth/auth.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { FeedModule } from './feed/feed.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        AuthModule,
        FeedModule,
        StoreModule.forRoot({ router: routerReducer }),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
    ],
    providers: [
        PersistanceService, 
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
