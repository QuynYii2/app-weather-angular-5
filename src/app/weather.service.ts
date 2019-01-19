import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {enableProdMode} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';


@Injectable()
export class WeatherService {
	private url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?appid=a1bbec981861cd141bc5fa49972a1fcb'

    constructor(private http: HttpClient) {
    }

    getTemp(txtCityName: string) {
        return this.http.post(
            `${this.url}&q=${txtCityName}&units=metric`,
            {},
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                    'Access-Control-Allow-Credentials': 'true'
                })
            }
        );
    }
	
}
