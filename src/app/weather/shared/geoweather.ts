import {Weather} from "./weather";
import {Geo} from "./geo";

export class Geoweather {
  geo: Geo;
  weather: Weather;

  constructor(geo: Geo, weather: Weather) {
    this.geo = geo;
    this.weather = weather;
  }
}
