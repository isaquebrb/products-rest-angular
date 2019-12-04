import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  constructor(public service: ProductsService) {}

  Products: any = [];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    return this.service.getAll().subscribe((data) => {
      this.Products = data;
    });
  }

  deleteProduct(id) {
    this.service.delete(id).subscribe(data => {
      this.loadProducts();
    });
  }
}
