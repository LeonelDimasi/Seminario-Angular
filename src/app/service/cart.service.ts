import { Injectable } from '@angular/core';
import { Beer } from '../beer-list/Beer';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items: Beer[] =[];

  constructor() { }

  addToCard(beer:Beer){
    let newBeer = Object.assign({},beer);
    let alreadyIncart = false;
    this._items.forEach( (b:Beer)=>{
      if(b.name == newBeer.name){
        alreadyIncart = true;
        b.quantity += newBeer.quantity;
      }
    });

    if(!alreadyIncart){
      this._items.push(newBeer);
    }

  }

  getItems(){

    return this._items;
  }


}
