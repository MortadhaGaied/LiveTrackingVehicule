import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../services/voiture.service';
import { Voiture } from '../../model/voiture';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.scss']
})
export class UpdateVoitureComponent implements OnInit {
  voiture:Voiture=new Voiture();
  constructor(private serviceVoiture:VoitureService,private router:Router,private dialogRef:MatDialogRef<UpdateVoitureComponent>) { }

  ngOnInit(): void {
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
