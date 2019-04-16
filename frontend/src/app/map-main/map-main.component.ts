import { MapsService } from './maps.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IMarker } from '../shared/marker';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.css']
})
export class MapMainComponent implements OnInit {
  zoom: number = 12;

  lat: number;
  lng: number;
  city: String = '';

  latM: number;
  lngM: number;
  cityM: String = '';
  streetM: String = '';
  titleM: String = '';
  descriptionM: String = '';
  street_numberM: String ='';
  zipM: String = '';
  phoneM: String = '';
  website_urlM: String = '';
  emailM: String = '';
  image_urlM = '';


  //hier werden die Daten gespeichert
  location: Object;
  markers: IMarker[];
  
  constructor(private route: ActivatedRoute,
              private map: MapsService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('city');
    if (param) {
      const title = param;
    }
    this.map.getLocation(param).subscribe(data=>{
          console.log(data);
          this.lat = +data.latitude;
          this.lng = +data.longitude;
          this.city = data.city;
        });

        this.map.getMarkers(param).subscribe(markers=>{
          console.log(markers);
          this.markers = markers;
        })
  }
}
