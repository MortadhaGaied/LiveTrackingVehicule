import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../services/voiture.service';
import { Voiture } from '../../model/voiture';
import { VoitureModule } from '../voiture.module';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.scss']
})
export class AddVoitureComponent implements OnInit {
  voiture:Voiture=new Voiture();
  constructor(private serviceVoiture:VoitureService,private router:Router,private dialogRef:MatDialogRef<AddVoitureComponent>) { }

  ngOnInit(): void {
  }
  addVoiture(){
    this.serviceVoiture.addVehicule(this.voiture).subscribe(()=>{
      this.dialogRef.close();
      this.router.navigateByUrl("/voiture").then(()=>window.location.reload());
    })
  }
}
