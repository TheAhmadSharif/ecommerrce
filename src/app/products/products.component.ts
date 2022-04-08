import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Data } from '../data';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any = [];
  porduct = {
    date: '',
    name: '',
    category: '',
    price: '',
    options: ["Attire", "Shoes", "Accessories", "Others"]
  }
  constructor(private heroService: HeroService) { 
  }


  getHeroes(): void {
    this.products = this.heroService.getHeroes();
  }

  

  ngOnInit() {
    this.getHeroes();
    
  }




  addObject(event:any, porduct:any):void {
      event.preventDefault();
      this.heroService.add(porduct)
  }

}
