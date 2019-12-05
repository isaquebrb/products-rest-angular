import { Component, OnInit } from "@angular/core";
import { Products } from "../products";
import { ProductsService } from "../products.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { FormBuilder, Validators, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: "app-products-new",
  templateUrl: "./products-new.component.html",
  styleUrls: ["./products-new.component.scss"]
})
export class ProductsNewComponent implements OnInit {
  newProductForm: FormGroup;
  submitted = false;
  data: Products;

  constructor(
    public service: ProductsService,
    public router: Router,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.newProductForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      imgUrl: ['']      
    });
  }

  submitForm() {
    this.submitted = true;

    if(!this.newProductForm.valid){
      this.getErrorsFormGroup();
      return;
    }

    this.service.create(this.newProductForm.value).subscribe((response) =>{
      this.router.navigate(['/products']);
    });
  }

  onReset() {
    this.newProductForm.reset();
    this.submitted = false;
  }

  //Back page
  onCancel() {
    this.location.back();
  }

  // See the errors for each control on console.log browser
  getErrorsFormGroup(){
    Object.keys(this.newProductForm.controls).forEach(key =>{
      const controlErrorrs: ValidationErrors = this.newProductForm.get(key).errors;
      if(controlErrorrs != null){
        Object.keys(controlErrorrs).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrorrs[keyError]);
      });
    }
  });
  }
}
