import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ProductsAdvanced } from '../model/productsAdvanced';
import { Product } from '../model/products';

@Component({
  selector: 'app-products-api',
  imports: [RouterModule, CommonModule,],
  templateUrl: './products-api.component.html',
  styleUrl: './products-api.component.scss'
})
export class ProductsApiComponent {

  constructor( private api : ApiService){
    this.api.getProducts().subscribe((resp : any) => {
      this.productsArr = resp
      console.log(this.productsArr)
    })

  }

  productsArr : Product[] = []

}
