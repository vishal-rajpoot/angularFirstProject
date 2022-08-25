import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  getweatherData(){
    let url="http://dataservice.accuweather.com/currentconditions/v1/{locationKey}"
    return this.http.get(url);

  }
}
