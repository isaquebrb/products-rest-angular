import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss']
})
export class ProductsNewComponent implements OnInit {

  data = new Products();
  
  constructor(public service: ProductsService, public router: Router) { 
    
  }

  ngOnInit() {
  }

  submitForm(){
    console.log("Submit!");
  }

  addProduct(){
    
  }

}
