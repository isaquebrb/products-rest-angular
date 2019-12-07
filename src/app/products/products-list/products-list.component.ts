import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { Products } from '../products';

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  constructor(public service: ProductsService) {}

  Products: any = [];
  selectedProduct: Products;

  ngOnInit() {
    this.loadProducts();
    this.selectedProduct = new Products();
  }

  loadProducts() {
    return this.service.getAll().subscribe((data) => {
      this.Products = data;
    });
  }
  
  // When the delete button is clicked, the selected product is assigned to 'selectedProduct' variable
  setSelectedProduct(product: Products){
    this.selectedProduct = product;

  }

  //delete the selectedProduct
  deleteProduct() {
    this.service.delete(this.selectedProduct.id).subscribe(data => {
      this.loadProducts();
    });
  }
}
