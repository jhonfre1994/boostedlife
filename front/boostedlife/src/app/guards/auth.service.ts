import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivate {

    token = localStorage.getItem("access_token");
    refres_token = localStorage.getItem("refresh_token");
    usuarioLog = localStorage.getItem("usu");

    constructor(public jwtHelper: JwtHelperService, private router: Router) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        let usu = JSON.parse(sessionStorage.getItem("username"))
        if (usu == null || usu == undefined) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    isLoggin(): boolean {
        const token = sessionStorage.getItem("access_token");
        const refres_token = sessionStorage.getItem("refresh_token");
        const usuarioLog = sessionStorage.getItem("usuario");
        if (refres_token === null || this.jwtHelper.isTokenExpired(refres_token) == true
            || token === null || usuarioLog === null) {
            this.router.navigateByUrl('login')
            return false;
        }
        return true;
    }
}