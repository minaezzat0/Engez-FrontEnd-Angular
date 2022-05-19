
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest , HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth';

// import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService implements HttpInterceptor {

  private httpOptions = {};
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Access-token'
      })
    }

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = req.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('login')}`
        }

      })

    return next.handle(token);

  }

  auth_login(data: Auth): Observable<any> {

    return this.httpClient.post(`${ environment.API_BASE_URL}/login`, data);
  }

  auth_logout( token : string) {

    return this.httpClient.get(`${ environment.API_BASE_URL }/logout?access_token=${token}`);
  }
  get loggedIn() : boolean {
    return (localStorage.getItem('login'))? true  : false ;
  }



  // loggedIn() {
  //   return !!localStorage.getItem('login');
  // }
}

