import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Location } from "@angular/common";
import { User } from "../user";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"]
})
export class UserEditComponent implements OnInit {
  submitted: boolean = false;
  editUserForm: FormGroup;
  id: string = "";

  constructor(
    private location: Location,
    private actRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    //get id from url
    this.actRouter.params.subscribe(params => {
      this.id = params["id"];
    });

    this.createFormGroup();

    //get user and set it's values to form
    this.getUser(this.id);
  }

  createFormGroup() {
    this.editUserForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      password: ["", Validators.required]
    });
  }

  getUser(id) {
    this.userService.getOne(id).subscribe(data => {
      this.setValuesToForm(data);
    });
  }

  setValuesToForm(user: User) {
    this.editUserForm.setValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password
    });
  }

  onReset() {
    this.editUserForm.reset();
    this.submitted = false;
  }

  //Back page
  onCancel() {
    this.location.back();
  }

  submitForm() {
    this.submitted = true;

    if (this.editUserForm.invalid) {
      return;
    }

    this.userService
      .update(this.id, this.editUserForm.value)
      .subscribe(response => {});

    this.router.navigate(["/users"]);
  }
}
