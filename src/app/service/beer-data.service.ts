import { Injectable } from '@angular/core';
//import { BEERS } from '../beer-list/mocks';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import { Beer } from '../beer-list/Beer';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

constructor(private http: HttpClient) { }

  getBeers(){
    return this.http.get('https://brewery-angular-c4bef.firebaseio.com/beers.json')
    .pipe(
      map(response =>{
          let beers = response;
          return <Beer[]>Object.keys(beers).map(key => Object.assign({ key }, beers[key]));
        })
    );
  }
}