import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsNewComponent } from "./products-new/products-new.component";
import { ProductsEditComponent } from "./products-edit/products-edit.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/products/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ProductsListComponent
  },
  {
    path: "new",
    component: ProductsNewComponent
  },
  {
    path: "edit/:id",
    component: ProductsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
