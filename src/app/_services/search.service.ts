import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../config/api.config';
import { isEmpty } from '../utils/common.utils';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getList(data: any) {
    return this.http.post(API_URLS.SEARCH, {...data})
    .pipe(
      map((response) => {
        return response;
      })
    );
  }

  getDetails(id: any) {
    return this.http.get(`${API_URLS.DETAILS}/${id}`)
    .pipe(
      map((response) => {
        return response;
      })
    );
  }

  getAllCountriesList() {
    return this.http.get(API_URLS.ALL_COUNTRIES)
    .pipe(
      map((response) => {
        return response;
      })
    );
  }

  getStateList(country: any = null, getAllList: boolean = false) {
    const req: any = {
      returnAll: getAllList
    };
    if (!getAllList && !isEmpty(country)) {
      req['country']=country;
    }

    return this.http.post(API_URLS.STATES,req)
    .pipe(
      map((response) => {
        return response;
      })
    );
  }

  getCityList(country: any, state: any) {
    return this.http.post(API_URLS.CITIES,{
      state,
      country
    })
    .pipe(
      map((response) => {
        return response;
      })
    );
  }
}
