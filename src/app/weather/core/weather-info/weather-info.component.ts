import {Component, Input} from '@angular/core';
import {Geoweather} from "../../shared/geoweather";


@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})



export class WeatherInfoComponent {
  @Input() weath?: Geoweather;
}
