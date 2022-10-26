import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoitureRoutingModule } from './voiture-routing.module';
import { ListvoitureComponent } from './listvoiture/listvoiture.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import {MatDialogModule} from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';

@NgModule({
  declarations: [
    ListvoitureComponent,
    AddVoitureComponent,
    UpdateVoitureComponent
  ],
  imports: [
    CommonModule,
    VoitureRoutingModule,
    MatDialogModule,
    FormsModule
  ]
})
export class VoitureModule { }
