import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  temperture : number = 0;
  city : string = ""

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      const temp = params['tempertureCity'];
      if(temp){
        this.temperture = +temp;
      }

      const name = params['nameCity'];
      if(name){
        this.city = name;
      }
    })
  }
}
