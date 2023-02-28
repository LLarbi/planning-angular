import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GeoComponent } from './core/geo/geo.component';
import { WeatherInfoComponent } from './core/weather-info/weather-info.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    GeoComponent,
    WeatherInfoComponent,
  ],
  exports: [
    GeoComponent,
    WeatherInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class WeatherModule { }
