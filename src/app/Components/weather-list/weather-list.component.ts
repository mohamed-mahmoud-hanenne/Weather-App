import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent {
  searchText : string = ''; 
  filterList:any[] = [];
  sortBy:string = '';
  sortAscending:boolean = false;
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

  filterWeather(){
    if(!this.searchText){
      this.filterList = this.weatherList
    }

    else{
      this.filterList = this.weatherList.filter(cityweather =>{
        return cityweather.city.toLowerCase().includes(this.searchText.toLowerCase())
      });
      console.log(this.filterList)
      
    }
  }

  sortByCity(property:string){
    this.sortBy = property;
    this.sortAscending = !this.sortAscending;
    this.filterList.sort((a,b)=>{
      const  avalue = a[property];
      const bvalue = b[property];

      if(avalue < bvalue){
        return this.sortAscending ? -1 : 1;
      }
      else if(avalue > bvalue){
        return this.sortAscending ? 1 : -1;
      }
      return 0;
    });
  }
}
