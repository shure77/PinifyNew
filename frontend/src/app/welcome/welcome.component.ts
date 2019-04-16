import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/city.service';
import { ICity } from '../shared/city';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  errorMessage: String;
  cityName: String;
  cities: ICity[];
  constructor(private cityService: CityService) { }

  ngOnInit() : void {
    this.cityService.getCities().subscribe(
      cities => {
        console.log(cities);
        this.cities = cities
      },
      error => this.errorMessage = <any>error
    );
  }

  onSubmit(): String{
    return this.cityName;
  }

}
