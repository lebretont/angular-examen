import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Classe permettant d'injecter dans le header Authorization le string 'SUPER_MOT_DE_PASSE_TOP_SECRET'
 * chaque fois qu'une requête est faite.
 */
@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Authorization = 'SUPER_MOT_DE_PASSE_TOP_SECRET';
    return next.handle(httpRequest.clone({ setHeaders: { Authorization } }));
  }
}
