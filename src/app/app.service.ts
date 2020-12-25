import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UrlConstants } from './url.contants';
import { OverviewData } from './app.model';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getOverAllData(onSuccess: (overviewData: any) => void) {
    this.http.get(UrlConstants.OVERALL_DATA).subscribe((data) => {
      onSuccess(data);
    }, errorObj => {
      console.log('errors ', errorObj);
    });
  }

  getCountriesData(onSuccess: (countriesData: any) => void) {
    this.http.get(UrlConstants.COUNTRIES_DATA).subscribe((data) => {
      onSuccess(data);
    }, errorObj => {
      console.log('errors', errorObj);
    })
  }

  getContinentsData(onSuccess: (continentsData: any) => void) {
    this.http.get(UrlConstants.CONTINENTS_DATA).subscribe((data) => {
      onSuccess(data);
    }, errorObj => {
      console.log('Errors ', errorObj);
    })
  }
}
