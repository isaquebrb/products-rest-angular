import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsNewComponent } from './products-new/products-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsEditComponent } from './products-edit/products-edit.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsNewComponent,
    ProductsEditComponent
  ],
  imports: [CommonModule, ProductsRoutingModule, ReactiveFormsModule]
})
export class ProductsModule {}
