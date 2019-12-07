import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../products.service";
import { Products } from '../products';

@Component({
  selector: "app-products-edit",
  templateUrl: "./products-edit.component.html",
  styleUrls: ["./products-edit.component.scss"]
})
export class ProductsEditComponent implements OnInit {
  submitted: boolean;
  editProductForm: FormGroup;
  id:string;

  constructor(
    private location: Location,
    private actRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.submitted = false;
    this.id = this.actRouter.snapshot.params["id"];
    this.createForm();
    this.getProduct(this.id);
  }

  getProduct(id) {
    this.service.getOne(id).subscribe(data => {
      this.setValueForm(data);
    });
  }

  createForm() {
    this.editProductForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      description: [""],
      price: ["", [Validators.required, Validators.min(0)]],
      imgUrl: [""]
    });
  }

  setValueForm(data) {
    this.editProductForm.setValue({
      name: data.name,
      description: data.description,
      price: data.price,
      imgUrl: data.imgUrl
    });
  }

  onReset() {
    this.editProductForm.reset();
    this.submitted = false;
  }

  //Back page
  onCancel() {
    this.location.back();
  }

  submitForm() {
    this.submitted = true;

    if (!this.editProductForm.valid) {
      return;
    }

    this.service.update(this.id, this.editProductForm.value).subscribe(response => {
      this.router.navigate(['/products']);
    })
  }
}
