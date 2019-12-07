import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrderRoutingModule } from "./order-routing.module";
import { OrderListComponent } from "./order-list/order-list.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, OrderRoutingModule, ReactiveFormsModule]
})
export class OrderModule {}
