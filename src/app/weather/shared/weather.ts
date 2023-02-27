import {Codeww} from "./codeww";

export class Weather {
  temperature: number
  winddirection: number
  windspeed: number
  time: string
  weath: Codeww

  constructor(temperature: number, winddirection: number, windspeed: number, time: string, codeww: number) {
    this.temperature = temperature;
    this.winddirection = winddirection;
    this.windspeed = windspeed;
    this.time = time;
    this.weath = new Codeww(codeww);
  }
}
