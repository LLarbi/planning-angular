export class Geo {
  lat: number;
  lon: number;
  name: string;
  flag: string;
  private static id: number = 0;
  id: number;
  constructor(lat: number, lon: number, name: string, flag: string) {
    this.lat = lat;
    this.lon = lon;
    this.name = name;
    this.flag = flag;
    Geo.id = ++Geo.id;
    this.id = Geo.id;
  }
}
