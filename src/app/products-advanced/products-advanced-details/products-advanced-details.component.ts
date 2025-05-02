import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsAdvanced } from '../../model/productsAdvanced';

@Component({
  selector: 'app-products-advanced-details',
  imports: [],
  templateUrl: './products-advanced-details.component.html',
  styleUrl: './products-advanced-details.component.scss'
})
export class ProductsAdvancedDetailsComponent {

  constructor(private route : ActivatedRoute){

    this.route.params.subscribe(ramp => {
     console.log(ramp['id'])
    //  this.singlePorduct = this.products.find(el => el.id == ramp['id'])

    })

  }

  singlePorduct? : any = ""
  // products : ProductsAdvanced = []

}
