import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralDTO } from '../model/GeneralDTO';

@Injectable({
  providedIn: 'root'
})
export class BoostedBoardService {

  constructor(public http: HttpClient) { }

  public gerGeneralData(nameUser: string):Observable<GeneralDTO>{
    return this.http.get<GeneralDTO>(environment.url + "api/v.1/consultaGeneral/" + nameUser)
  }

}
