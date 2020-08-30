import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;

  constructor() {
  }

  SavesessionStorage(accessToken: string, refre: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    this.accessToken = accessToken;
    sessionStorage.setItem('access_token', accessToken);
    sessionStorage.setItem("refresh_token", refre);
  }


  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.clear()
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }
}