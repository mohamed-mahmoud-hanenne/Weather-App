import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { WeatherListComponent } from './Components/weather-list/weather-list.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFountComponent } from './Components/not-found/not-fount.component';
import { BackGroundColorDirective } from './Directives/back-ground-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    WeatherListComponent,
    FooterComponent,
    NotFountComponent,
    BackGroundColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
