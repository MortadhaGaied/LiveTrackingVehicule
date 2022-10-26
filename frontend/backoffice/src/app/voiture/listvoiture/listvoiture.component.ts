import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Voiture } from '../../model/voiture';
import { VoitureService } from '../../services/voiture.service';
import { AddVoitureComponent } from '../add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from '../update-voiture/update-voiture.component';

@Component({
  selector: 'app-listvoiture',
  templateUrl: './listvoiture.component.html',
  styleUrls: ['./listvoiture.component.scss']
})
export class ListvoitureComponent implements OnInit {
  search:string;
  listVoiture!:Voiture[];
  voiture:Voiture;
  color:string="font-size:48px;color:"
  constructor(private serviceVoiture:VoitureService,private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.serviceVoiture.getAllVehicule().subscribe((data)=>{
      console.log(data);
      
      this.listVoiture=data;
    });
  }
  deleteVehicule(id:number){
    this.serviceVoiture.deleteVehicule(id).subscribe(()=>this.serviceVoiture.getAllVehicule().subscribe((data)=>{
      this.listVoiture=data;
    }))
  }
  openAddVehicule(){
    this.matDialog.open(AddVoitureComponent);
  }
  updateVehicule(id:number){
    this.voiture=this.serviceVoiture.sendIdToUpdate(id);
    this.matDialog.open(UpdateVoitureComponent);
  }
  searchfct(){
    this.serviceVoiture.getAllVehicule().subscribe((data)=>{
      this.listVoiture=data.filter(res=>{
          if(res.marque.toLocaleLowerCase().match(this.search.toLocaleLowerCase())){
            return true;
          }
          if(res.matricule.toLocaleLowerCase().match(this.search.toLocaleLowerCase())){
            return true;
          }
          if(res.typeCarburant.toLocaleLowerCase().match(this.search.toLocaleLowerCase())){
            return true;
          }
          
          if(res.dateDeFabrication.toString().toLocaleLowerCase().match(this.search.toLocaleLowerCase())){
            return true;
          }
          else{
            return false;
          }
      })
    })
  }

}
