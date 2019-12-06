import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserNewComponent } from "./user-new/user-new.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/users/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: UserListComponent
  },
  {
    path: "edit/:id",
    component: UserEditComponent
  },
  {
    path: "new",
    component: UserNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
