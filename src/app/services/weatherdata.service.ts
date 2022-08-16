import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http:HttpClient) { }


// getWeatherData(){

//  return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6fa99e1f96f024f79970c5a3532b2ac6').subscribe((data)=>console.log(data));
 
// }
}