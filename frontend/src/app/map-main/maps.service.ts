import { HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMarker } from '../shared/marker';
import { ICity } from '../shared/city';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }
    PHP_API_SERVER = 'http://localhost/PinifyNew/backend';

  getLocation(city: string) {
    return this.http.get<ICity>(`${this.PHP_API_SERVER}/api/readCities.php/?city=${city}`);
  }

  getMarkers(city: string): Observable<IMarker[]> {
    return this.http.get<IMarker[]>(`${this.PHP_API_SERVER}/api/readMarkers.php/?city=${city}`);
  }
}
