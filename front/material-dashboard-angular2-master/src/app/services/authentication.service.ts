
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  static AUTH_TOKEN = '/oauth/token';

  constructor(private http: Http, private http2: HttpClient) {
  }

  login(username: string, password: string) {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(environment.TOKEN_AUTH_USERNAME + ':'
      + environment.TOKEN_AUTH_PASSWORD));

    return this.http.post(environment.url + "oauth/token", body, { headers })
      .pipe(map(res => res.json()))
      .pipe(map((res: any) => {
        if (res) {
          return res;
        }
        return null;
      }));
  }

  refreshToken() {
    var refresh = localStorage.getItem('refresh_token');
    const body = `&refresh_token=${refresh}&grant_type=refresh_token`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(environment.TOKEN_AUTH_USERNAME + ':' +
      environment.TOKEN_AUTH_PASSWORD));


    return this.http.post(environment.url + "oauth/token", body, { headers })

      .pipe(map(res => res.json()))

      .subscribe(data => {
        //localStorage.setItem("refresh_token", data.refresh_token);
        //localStorage.setItem(environment.TOKEN_NAME, data.access_token);

      })
  }
}