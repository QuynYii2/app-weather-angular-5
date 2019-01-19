import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';   // our custom service, see below

import { AgmCoreModule } from '@agm/core'
import { ViewChild } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, HttpClientJsonpModule,
	AgmCoreModule.forRoot({
      apiKey:'AIzaSyC66XbxXeujhDRwnT7-idoZivaDIlb2F9k'
      //This is a GoogleAPIs Key. I already created using Google developer account.
    })
  ],
  providers: [WeatherComponent,WeatherService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
