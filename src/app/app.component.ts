import { Component } from '@angular/core';
import { WeatherdataService } from './services/weatherdata.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';

 
  loc: string = "kochi"

  temp: any = ''

  tempMin: any = ''
  tempMax:any=''
  humidity:any=''
  wind:any=''
  temperature:any=''
  mainName:string=''
  cityName:string=''

  constructor(private wd: WeatherdataService, private http: HttpClient) {
    this.getWeatherData()
  }


  onSubmit(){
    this.getWeatherData();
    this.loc=""
  }

  getWeatherData() {

    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.loc}&appid=6fa99e1f96f024f79970c5a3532b2ac6`).subscribe((data) => {
      console.log(data);

      this.temp = data;

      this.tempMin = (this.temp.main.temp_min - 273.15).toFixed(0);
      console.log(this.tempMin);


      this.tempMax = (this.temp.main.temp_max - 273.15).toFixed(0);
      console.log(this.tempMax);


      this.humidity = this.temp.main.humidity 
      console.log(this.humidity);

      
      this.wind = this.temp.wind.speed 
      console.log(this.wind);


      this.temperature=(this.temp.main.temp - 273.15).toFixed(0);
      console.log(this.temperature);


      this.mainName=this.temp.weather[0].main 
      console.log(this.temperature);

      this.cityName=this.temp.name 
      console.log(this.cityName);

         console.log(data);

    }
    );

  }




}
