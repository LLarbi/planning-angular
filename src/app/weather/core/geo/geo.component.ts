import {Component, OnInit} from '@angular/core';
import {GeoService} from '../../shared/geo.service';
import {Observable, of} from "rxjs";
import {Geo} from "../../shared/geo";
import {WeatherService} from "../../shared/weather.service";
import {Geoweather} from "../../shared/geoweather";
import {Weather} from "../../shared/weather";
import {UserService} from "../../../services/user/user.service";


@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit{
  geoLoc$?: Observable<Geo[]>;
  location?: Geo;
  weath?: Weather;
  listWeather: Geoweather[] = [];
  listWeatherObservalble$!: Observable<Geoweather[]>;
  search: string = "";

  constructor(
    private geoService: GeoService,
    private weatherService: WeatherService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.myProfil();
  }

  myProfil() {
    this.userService.myProfile().subscribe({
      next: (value: any) => {
        if (value.city != null && value.country != null) {
          this.myCity(value);
        }
      },
      error: (error: string) => console.log(error),
      complete: () => console.log("fini")});
  }

  myCity(value: any) {
    this.geoService.getGeoLoc(`${value.city} ${value.country}`).subscribe({
      next: (value: any) => {
        const geo = value[0];
        this.location = geo;
        this.getWeather(geo.lon, geo.lat);
      },
      error: (error: string) => console.log(error),
      complete: () => console.log("fini")
    });
  }

  onSubmit() {
    this.getGeoLoc(this.search);
  }
  getGeoLoc(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.geoLoc$ = this.geoService.getGeoLoc(name);
  }

  chooseGeo(geo: Geo) {
    this.location = geo;
    this.getWeather(geo.lon, geo.lat);

    this.search = "";
    this.geoLoc$ = undefined;
  }

  getWeather(lon: number, lat: number): void {
    this.weatherService.getWeather(lon, lat).subscribe(
      (weather: Weather) => {
        this.weath = weather
        if (this.location) {
          this.listWeather.push(new Geoweather(this.location, this.weath));
          this.listWeatherObservalble$ = of(this.listWeather)
        }
      },
      (error:any) => console.log(error),
      () => console.log("fini")
    );
  }
}
