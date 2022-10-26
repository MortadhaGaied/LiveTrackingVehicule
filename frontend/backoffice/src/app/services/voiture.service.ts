import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Voiture } from '../model/voiture';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  voiture:Voiture;
  $eventEmit=new EventEmitter();
  constructor(private http:HttpClient) { }
  getAllVehicule():Observable<Voiture[]>{
    return this.http.get<Voiture[]>("http://localhost:8081/voiture/afficherVoiture");
  }
  deleteVehicule(id:number){
    return this.http.delete("http://localhost:8081/voiture/supprimerVoiture/"+id);
  }
  addVehicule(voiture:Voiture):Observable<Voiture>{
    console.log(voiture);
    return this.http.post<Voiture>("http://localhost:8081/voiture/ajouterVoiture",voiture);
  }
  updateVehicule(voiture:Voiture):Observable<Voiture>{
    console.log(voiture);
    return this.http.put<Voiture>("http://localhost:8081/voiture/modifierVoiture",voiture);
  }
  getVoitureById(id:number):Observable<Voiture>{
    return this.http.get<Voiture>("http://localhost:8081/voiture/getvoiturebyid/"+id);
  }
  sendIdToUpdate(id:number):any{
    this.getVoitureById(id).subscribe((data)=>{
      this.voiture=data;
      this.$eventEmit.emit(this.voiture);
      return data;
    });
  }
}
