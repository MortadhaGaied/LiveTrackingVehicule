import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { ListvoitureComponent } from './listvoiture/listvoiture.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path:"",component:ListvoitureComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoitureRoutingModule { }
