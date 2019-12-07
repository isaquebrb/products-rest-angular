import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-user-new",
  templateUrl: "./user-new.component.html",
  styleUrls: ["./user-new.component.scss"]
})
export class UserNewComponent implements OnInit {
  submitted: boolean = false;
  newUserForm: FormGroup;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.newUserForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      password: ["", Validators.required]
    });
  }

  //Back page
  onCancel() {
    this.location.back();
  }

  submitForm() {
    this.submitted = true;

    if (this.newUserForm.invalid) {
      return;
    }

    this.userService.create(this.newUserForm.value).subscribe(response => {});

    this.router.navigate(["/users"]);
  }
}
