import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef    } from '@angular/core';
import {WeatherService} from '../weather.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import { } from '@types/googlemaps';
import { AgmCoreModule } from '@agm/core';
import { AgmMap } from '@agm/core';
import { filter, scan } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { ajax } from 'rxjs/ajax';
import { TestScheduler } from 'rxjs/testing';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	public cityname;
	title = "App Weather Angular 5";
    txtCityName = '';
	cityName ='';
	temp: any;
	lat: number;
	lng: number;
	icons: any;
	countrys: any;
	humiditys: any;
	wins: any;
	errorMessage : string;
	
	constructor(private weatherService: WeatherService) {
		
	}

	ngOnInit() {
		
	}
	getWeather() {
        this.weatherService.getTemp(this.txtCityName).subscribe(
			
				(resData: any) => {
					console.log(resData)
					this.cityName = this.txtCityName;
					this.temp = resData.main.temp;
					this.lat = resData.coord.lat;
					this.lng = resData.coord.lon;
					this.icons = resData.weather[0].icon;
					this.countrys = resData.sys.country;
					this.humiditys = resData.main.humidity;
					this.wins = resData.wind.speed;
					this.errorMessage  = resData.error.message;
				}
        );
    }
}