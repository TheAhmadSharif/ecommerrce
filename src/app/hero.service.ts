import { Injectable } from '@angular/core';
import { Data } from './data';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  products = Data;

  constructor() { }

  getHeroes(): Product[] {
    return this.products;
  }
  add(object:any):void {
      const __product = {
        "date": object.date,
        "name": object.name,
        "category": object.category,
        "price": parseInt(object.price),
      }
      this.products.push(__product);
  }

}
