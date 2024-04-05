import { Component } from '@angular/core';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-fetch-employee',
  templateUrl: './fetch-employee.component.html',
  styleUrls: ['./fetch-employee.component.css']
})
export class FetchEmployeeComponent {
  constructor(private empService : EmpServiceService){}
  zoom = 15;
  lat = 13.01224629653743
  lng = 80.20999610424042

 

  center: google.maps.LatLngLiteral = {lat : this.lat, lng : this.lng}
  marker_positions : google.maps.LatLngLiteral = this.center;
  marker_options  : google.maps.MarkerOptions = { draggable : false};

  addMarker(event:google.maps.MapMouseEvent){
    this.empService.openLoader();
    console.log(event.latLng?.toJSON());
  }
}
