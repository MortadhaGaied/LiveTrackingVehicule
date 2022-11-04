import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conducteur } from '../model/conducteur';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  constructor(private http:HttpClient) { }
  getAllConducteur():Observable<Conducteur[]>{
    return this.http.get<Conducteur[]>("http://localhost:8081/conducteur/afficherConducteur");
  }
}
