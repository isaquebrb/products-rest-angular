import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "products",
    loadChildren: () => ProductsModule
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
