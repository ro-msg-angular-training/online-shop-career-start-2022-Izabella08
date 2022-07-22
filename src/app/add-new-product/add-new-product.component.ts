import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/productService';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  myForm: FormGroup;
  productSubscription : Subscription;
  
  constructor(
    private fb: FormBuilder,
    private productService: ProductService  
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      id: ['',[
        Validators.required,
        Validators.min(1),
        Validators.pattern('[0-9]*')
      ]],
      name: ['',[
        Validators.required,
        Validators.minLength(4),
      ]],
      category: ['',[
        Validators.required,
        Validators.minLength(4)
      ]],
      price: ['',[
        Validators.required,
        Validators.min(10),
        Validators.max(5000),
        Validators.pattern('[0-9]*')
      ]],
      description: ['',[
        Validators.required,
        Validators.minLength(5)
      ]]
    })

  }

  get id(){
    return this.myForm.get('id');
  }

  get name(){
    return this.myForm.get('name');
  }

  get category(){
    return this.myForm.get('category');
  }

  get price(){
    return this.myForm.get('price');
  }

  get description(){
    return this.myForm.get('description');
  }

  addProduct(){
    const payload = { 
      id: this.myForm.value.id,
      name: this.myForm.value.name,
      category: this.myForm.value.category,
      price: this.myForm.value.price,
      description: this.myForm.value.description
    }
    this.productSubscription = this.productService.addNewProduct(payload).subscribe(() => Swal.fire("Product added successfully!"));
  }

  discardChanges(){
    this.myForm.reset();
  }

  ngOnDestroy(){
    if(this.productSubscription !== undefined)
      this.productSubscription.unsubscribe();
  }

}
