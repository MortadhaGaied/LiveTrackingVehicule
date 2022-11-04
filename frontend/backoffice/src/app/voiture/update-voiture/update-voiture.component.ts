import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../services/voiture.service';
import { Voiture } from '../../model/voiture';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Conducteur } from '../../model/conducteur';
import { ConducteurService } from '../../services/conducteur.service';
@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.scss']
})
export class UpdateVoitureComponent implements OnInit {
  voiture:Voiture=new Voiture();
  conducteurs:Conducteur[]=[];
  constructor(private serviceVoiture:VoitureService,private serviceConducteur:ConducteurService,private router:Router,private dialogRef:MatDialogRef<UpdateVoitureComponent>) { }

  ngOnInit(): void {
    this.serviceConducteur.getAllConducteur().subscribe((data)=>{
      this.conducteurs=data;
    })
    this.serviceVoiture.$eventEmit.subscribe((data)=>{
      this.voiture=data;
      console.log(data);
    })
  }
  updateVoiture(){

    this.serviceVoiture.updateVehicule(this.voiture).subscribe(()=>{
      this.dialogRef.close();
      this.router.navigateByUrl("/voiture").then(()=>window.location.reload());
    })
  }
}
