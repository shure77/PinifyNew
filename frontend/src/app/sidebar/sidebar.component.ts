import { Component, OnInit } from '@angular/core';
import { MarkerService } from './../shared/marker.service.';
import { IMarker } from '../shared/marker';
import { MapsService } from '../map-main/maps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selectedMarker: IMarker = { id: null, pins_id: null, title: null, description: null, street: null, street_number: null, zip: null, city: null, phone: null, website_url: null, email: null, longitude: null, latitude: null, image_url: null };
  homeIcon = require("../media/icons/home.png");
  createIcon = require("../media/icons/create.png");
  updateIcon = require("../media/icons/update.png");
  deleteIcon = require("../media/icons/delete.png");
  showCreate: boolean = false;
  showDelete: boolean = false;
  showUpdate: boolean = false;
  markers: IMarker[];

  constructor(private route: ActivatedRoute,
              private markerService: MarkerService,
              private map: MapsService,
              private router: Router) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('city');
    this.map.getMarkers(param).subscribe(
      markers => {
        this.markers = markers;
      }
    )
   }

  createOrUpdateMarker(form) {
    if (this.selectedMarker && this.selectedMarker.id) {
      form.value.id = this.selectedMarker.id;
      this.markerService.updateMarker(form.value).subscribe((marker: IMarker) => {
        console.log('Marker updated', marker);
        window.location.reload(true);
      });
    } else {
      console.log(form.value);
      this.markerService.createMarker(form.value).subscribe((marker: IMarker) => {
        console.log('Marker created, ', marker);
        window.location.reload(true);
      });
    }
  }

    selectMarker(marker: IMarker) {
      this.selectedMarker = marker;
      console.log(this.selectedMarker);
    }

  toggleCreate(): void{
    this.showDelete = false;
    this.showCreate = false;
    this.showUpdate = false;
    this.showCreate = !this.showCreate;
  }

  toggleUpdate(): void{
    this.showDelete = false;
    this.showCreate = false;
    this.showUpdate = false;
    this.showUpdate = !this.showUpdate;
  }

  toggleDelete(): void{
    this.showDelete = false;
    this.showCreate = false;
    this.showUpdate = false;
    this.showDelete = !this.showDelete;
  }

  gotToHome(): void {
    this.router.navigate(['/welcome']);
  }

  deleteMarker(id) {
    this.markerService.deleteMarker(id).subscribe((marker: IMarker) => {
        console.log('Marker deleted, ', marker);
        window.location.reload(true);
    });
}
}
