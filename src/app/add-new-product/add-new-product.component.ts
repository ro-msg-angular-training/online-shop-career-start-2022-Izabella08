import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAppState } from '../store/state/app.state';
import { Store } from '@ngrx/store';
import { AddProduct } from '../store/actions/product.actions';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  myForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>
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
    if (this.myForm?.valid) {
      const product = this.myForm.value;

      this.store.dispatch(AddProduct({ product }));
    }
  }

  discardChanges(){
    this.myForm.reset();
  }

}
