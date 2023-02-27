import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Weather} from "./weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url: string = "https://api.open-meteo.com/v1/forecast?";

  constructor(
    private http: HttpClient
  ) { }

  getWeather(lon: number, lat: number): Observable<Weather> {
    return this.http.get<any>(this.url+ "latitude=" + lat + "&longitude=" + lon + "&current_weather=true")
      .pipe(map(response => new Weather(
        response.current_weather.temperature,
        response.current_weather.winddirection,
        response.current_weather.windspeed,
        response.current_weather.time,
        response.current_weather.weathercode
        )
      ));
  }
}
