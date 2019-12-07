import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  Users: any = [];

  selectedUser: User = new User();

  constructor(private userService: UserService) {
    this.selectedUser = this.Users[1];
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    return this.userService.getAll().subscribe(data => {
      this.Users = data;
    });
  }

  setSelectedUser(user) {
    this.selectedUser = user;
  }

  deleteUser() {
    this.userService.delete(this.selectedUser.id).subscribe(response => {
      this.loadUsers();
    });
  }
}
