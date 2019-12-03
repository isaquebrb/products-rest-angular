import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [CommonModule, ProductsRoutingModule]
})
export class ProductsModule {}
