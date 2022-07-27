import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';
import { Product } from '../entities/product';
import { EditProduct } from '../store/actions/product.actions';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  myForm: FormGroup;
  product: Product;
  id: string | null;
  productSubscription: Subscription;
  selectProductToEdit: Product | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(4)
      ]],
      category: ['', [ 
        Validators.required, 
        Validators.minLength(4)
      ]],
      price: ['', [
        Validators.required, 
        Validators.min(10), 
        Validators.max(5000), 
        Validators.pattern('[0-9]*')
      ]],
      description: ['', [
        Validators.required, 
        Validators.minLength(5)
      ]]
    })
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

  editProductDetails(){
    this.id = this.route.snapshot.paramMap.get("id") ?? "";

    this.product = {
      id: parseInt(this.id),
      name: this.myForm?.value.name,
      category: this.myForm?.value.category,
      price: this.myForm?.value.price,
      description: this.myForm?.value.description
    }

    this.store.dispatch(EditProduct({ product: this.product }));
  }

  discardChanges(){
    this.myForm.reset();
  }

  ngOnDestroy(){
    if(this.productSubscription !== undefined)
      this.productSubscription.unsubscribe();
  }

}
