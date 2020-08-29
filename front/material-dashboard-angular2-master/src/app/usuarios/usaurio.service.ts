import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { UsuariosServerDTO } from 'app/model/UsuariosServerDTO';
import { IdentifiresAndNamUseresDTO } from 'app/model/IdentifiresAndNamUseresDTO';

@Injectable({
  providedIn: 'root'
})
export class UsaurioService {

  constructor(public http: HttpClient) { }

  header = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
  }


  public listarUsuarios(): Observable<UsuariosServerDTO[]> {
    return this.http.get<UsuariosServerDTO[]>(environment.url + "/api/v.1/usuarios/")
  }

  public namesAnsIdentifiresUsers(): Observable<IdentifiresAndNamUseresDTO[]> {
    return this.http.get<IdentifiresAndNamUseresDTO[]>(environment.url + "/api/v.1/usuarios/usersAnsNamesUsuers")
  }

  public saveUser(dto: UsuariosServerDTO): Observable<UsuariosServerDTO> {
    return this.http.post<UsuariosServerDTO>(environment.url + "/api/v.1/usuarios/", dto, this.header)
  }
}
