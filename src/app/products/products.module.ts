import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsNewComponent } from './products-new/products-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsNewComponent
  ],
  imports: [CommonModule, ProductsRoutingModule, FormsModule, ReactiveFormsModule]
})
export class ProductsModule {}
