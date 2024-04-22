import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './Components/weather/weather.component';
import { WeatherListComponent } from './Components/weather-list/weather-list.component';
import { NotFountComponent } from './Components/not-found/not-fount.component';

const routes: Routes = [
  {path:'',redirectTo:'weather',pathMatch:'full'},
  {path:'weather',component:WeatherComponent,title:'weather'},
  {path:'weather-list',component:WeatherListComponent,title:'weather-list'},
  {path:'**',component:NotFountComponent,title:'Not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
