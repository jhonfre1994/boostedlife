import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    constructor() { }


    getToken(): string {
        return sessionStorage.getItem("access_token")
    }

    addTenantToHeaders(headers: HttpHeaders): HttpHeaders {
        return headers.append('Authorization', `Bearer ${this.getToken()}`);
    }
}