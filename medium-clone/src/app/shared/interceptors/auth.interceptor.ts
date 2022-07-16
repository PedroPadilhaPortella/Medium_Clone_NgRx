import { PersistanceKey } from './../types/persistanceKey';
import { PersistanceService } from './../services/persistance.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private persistanceService: PersistanceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistanceService.get(PersistanceKey.ACCESS_TOKEN);
    request = request.clone({
        setHeaders: {
            Authorization: token ? `Token ${token}`: ''
        }
    });

    return next.handle(request);
  }
}
