import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';


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
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "users",
    loadChildren: () => UserModule
  },
  {
    path: "orders",
    loadChildren: () => OrderModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
