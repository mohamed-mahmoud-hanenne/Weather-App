import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent {
  weatherList : any[] = [
    {city:'Mekka',temperture:20},
    {city:'Aioun',temperture:30},
    {city:'Nouakchott',temperture:10},
    {city:'Casablanca',temperture:8},
    {city:'Istanbul',temperture:4},
  ]
  constructor(private router:Router){}

  navigateToWeather(tempertureCity:number,nameCity:string){
    this.router.navigate(['/weather'], {queryParams:{tempertureCity,nameCity}})
  }
}
