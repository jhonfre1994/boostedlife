import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { IdentifiresAndNamUseresDTO } from 'app/model/IdentifiresAndNamUseresDTO';
import { UsrUsuarioDTO } from 'app/model/UsrUsuarioDTO';
import { UsrRolDTO } from 'app/model/UsrRolDTO';

@Injectable({
  providedIn: 'root'
})
export class UsaurioService {

  constructor(public http: HttpClient) { }

  header = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
  }


  public listarUsuarios(): Observable<UsrUsuarioDTO[]> {
    return this.http.get<UsrUsuarioDTO[]>(environment.url + "api/v.1/usuarios/")
  }

  public namesAnsIdentifiresUsers(): Observable<IdentifiresAndNamUseresDTO[]> {
    return this.http.get<IdentifiresAndNamUseresDTO[]>(environment.url + "api/v.1/usuarios/usersAnsNamesUsuers")
  }

  public saveUser(dto: UsrUsuarioDTO): Observable<UsrUsuarioDTO> {
    return this.http.post<UsrUsuarioDTO>(environment.url + "api/v.1/usuarios/", dto, this.header)
  }

  public rolList(): Observable<UsrRolDTO[]> {
    return this.http.get<UsrRolDTO[]>(environment.url + "api/v.1/usuarios/roles")
  }
}
