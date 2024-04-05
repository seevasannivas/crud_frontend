import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators'
import { EmpServiceService } from './services/emp-service.service';

@Injectable()
export class EmpInterceptorInterceptor implements HttpInterceptor {

  constructor(private emp : EmpServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token = localStorage.getItem('access_token');

      if(token) request = this.addToken(request,token);

      return next.handle(request).pipe(
        catchError((error)=>{
          if(error.status == 403){
             return this.Handle403(request,next);
          }
          return throwError(error);
        })
      )
  }

  private addToken(request : HttpRequest<any>, token : string):HttpRequest<any>{
    return request.clone({
      setHeaders : {
        Authorization : `Bearer ${token}`
      }
    })
  }

  private Handle403(request : HttpRequest<any>,next : HttpHandler):Observable<HttpEvent<any>>{

     let refresh_token = localStorage.getItem('refresh_token');

     let data = {
      refresh_token,
      data : { mobile_no : 8489219379}
     }

     return this.emp.refreshToken(data).pipe(
      switchMap((res:any)=>{
        return next.handle(this.addToken(request,res.access_token));
      })
     )

  }
}
