import { Component } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  count = 0;
  name = "Vishal Rajput";
  show= true;
  users = ['Vishal','Saloni', 'Sahil', 'Vikas', 'Simran']
  userDetails = [
    {name : 'Vishal', email: 'vish@gmail.com', phone: '125452'},
    {name : 'Saloni', email: 'saloni@gmail.com', phone: '12435452'},
    {name : 'Sahil', email: 'sahil@gmail.com', phone: '125444'},
    {name : 'Vikas', email: 'viks@gmail.com', phone: '1279882'},

  ]
  updateData(){
    this.count = Math.floor(Math.random()*20);
  }

  getValue(type: string){
    type==='add' ? this.count++ : this.count--
  }
  constructor(private data: WeatherDataService){
    this.data.getweatherData().subscribe( (data) => {
      console.log(data)
    })
  }
}
