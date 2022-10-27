import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voiture } from '@app/model/Voiture';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http:HttpClient) { }
  getAllVehicule():Observable<Voiture[]>{
    return this.http.get<Voiture[]>("http://localhost:8081/voiture/afficherVoiture");
  }
}
