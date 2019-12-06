import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserNewComponent } from './user-new/user-new.component';


@NgModule({
  declarations: [UserListComponent, UserEditComponent, UserNewComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
