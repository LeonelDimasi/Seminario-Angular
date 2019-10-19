import { Component, OnInit } from '@angular/core';
//import { Beer } from './Beer';
//import { BEERS } from './mocks';
import { BeerDataService } from '../service/beer-data.service';
import { CartService } from '../service/cart.service';
import { Beer } from './Beer';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  
  public cervezas;
  stock: any;

  public imgSource = "../../assets/img/pinta.png";

  constructor(
    private beerDataService:BeerDataService,
    private cartService:CartService,
    ) { }

    addCard(beer:Beer){
      this.cartService.addToCard(beer);
      beer.stock -= beer.quantity;
    }

  public sumaBeer(cerveza){
    console.log(cerveza);
    cerveza.stock++;
  }

  public restaBeer(cerveza){
    console.log(cerveza);
    cerveza.stock--;
  }

  soloNumeros($event){
    if($event.key < "0" || $event.key > "9")
      $event.preventDefault();
  }

  ngOnInit() {
    this.beerDataService.getBeers().subscribe(beers => {
      
      this.cervezas=beers;
      console.log(this.cervezas);}
      );
    //this.cervezas = this.beerDataService.getBeers();
  }


  
}
