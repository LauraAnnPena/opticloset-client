import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  data: any;
  temperature: any;
  conditions: any;

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getConditions(data => {
      console.log(data);
      this.temperature = data.temp;
      if (data.weather.includes('rain')) {
        this.conditions = 'rainy';
      }
      if (data.weather.includes('cloud')) {
        this.conditions = 'cloud';
      }
      if (data.weather.includes('storm')) {
        this.conditions = 'thunderstorm';
      }
      if (data.weather.includes('sun')) {
        this.conditions = 'sun';
      }
    });
    // debugger;
  }
}
