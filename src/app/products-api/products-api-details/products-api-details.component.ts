import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../model/products';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-api-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './products-api-details.component.html',
  styleUrl: './products-api-details.component.scss'
})
export class ProductsApiDetailsComponent {


  constructor( private api : ApiService, private route : ActivatedRoute){

    this.route.params.subscribe(ramp => {
      
      this.id = ramp['id']
      console.log(this.id)
      
    })

      this.api.getProducts().subscribe((resp : any) => {
        this.productsArr = resp.find((el: { id: number; }) => el.id == this.id)
        console.log(this.productsArr)
      })
  
    }
  
    productsArr : Product = new Product

    id!: number


}
