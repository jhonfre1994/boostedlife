import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralDTO } from 'app/model/GeneralDTO';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoostedBoardService {

  constructor(public http: HttpClient) { }

  public gerGeneralData(nameUser: string):Observable<GeneralDTO>{
    return this.http.get<GeneralDTO>(environment.url + "/api/v.1/consultaGeneral/" + nameUser)
  }

}
