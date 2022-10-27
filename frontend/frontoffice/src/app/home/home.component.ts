import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { latLng, LatLng, Marker, tileLayer } from 'leaflet';
import { icon, Layer, marker } from 'leaflet';
import { QuoteService } from './quote.service';
import { Subject } from 'rxjs';
import { debounceTime, scan } from 'rxjs/operators';
import { VehiculeService } from '@app/services/vehicule.service';
import { Voiture } from '@app/model/Voiture';
import * as L from "leaflet";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  listVoiture!:Voiture[];
  markers:Layer[]=[];
  interval: any;
  map:any;
  homeCoords = {
    lat: 33.8869,
    lon: 9.5375
  };
  popupText = "Some popup text";
  markerGroup:any;
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    })
  };

  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 5,
    center: L.latLng(this.homeCoords.lat, this.homeCoords.lon)
  };

  addMarker(voiture:Voiture) {
    
    const popupInfo = `<b style="color: red; background-color: white">${
      voiture.matricule+' '+voiture.typeCarburant+' '+voiture.marque
    }</b>`;

   
      this.markers.push(
          marker(
          [voiture.laltitude, voiture.longitude], 
          this.markerIcon
          ).bindPopup(popupInfo)
        );
      
      
    
  }
  emptymarkers(){
    this.markers=[];
  }
  /*
  displayAllmarquers(){
    
    this.markers.forEach(m => {
      if(this.map.hasLayer(m)){
        console.log("exist");
      }
      else{
        m.addTo(this.map);
      }
    });
  }*/
  onMapReady(map: L.Map) {
    this.map = map;
    
  }
    
 
  constructor(private serviceVoiture:VehiculeService) {
    
  }
 
  ngOnInit() {
    
    this.refreshData();
    this.interval = setInterval(() => { 
      
      //this.displayAllmarquers();
      this.emptymarkers();
      this.refreshData(); 
    }, 5000);
    
  }
  refreshData(){
    
    this.serviceVoiture.getAllVehicule().subscribe((data)=>{
      
      
      
      this.listVoiture=data;
      this.listVoiture.forEach(voiture => {
        
        this.addMarker(voiture);
      });
      
      
    });
  }
}
