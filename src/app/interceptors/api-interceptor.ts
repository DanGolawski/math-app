import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (req.url.includes('www.googleapis.com/youtube')) {
         return next.handle(req.clone({url: req.url}));   
      }
      const apiReq = req.clone({ url: `${environment.mathAppApi}/${req.url}` });
      return next.handle(apiReq);
   }
}