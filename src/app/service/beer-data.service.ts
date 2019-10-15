import { Injectable } from '@angular/core';
import { BEERS } from '../beer-list/mocks';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http:HttpClient) { }

  getBeers(){

    this.http.get<any>();
    //return BEERS;
  }
}