import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { __values } from 'tslib';
import { Product } from '../entities/product';
import { ProductService } from '../services/productService';
import { EditProduct, GetProduct } from '../store/actions/product.actions';
import { selectProduct } from '../store/selectors/product.selectors';
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

    this.id = this.route.snapshot.paramMap.get("id");
    if(this.id){
        this.productSubscription = this.store.select(selectProduct).subscribe((data) => {
        this.selectProductToEdit = data;
        this.myForm = this.fb.group({
          name: [this.selectProductToEdit?.name, [Validators.required, Validators.minLength(4)]],
          category: [this.selectProductToEdit?.category, [ Validators.required, Validators.minLength(4)]],
          price: [this.selectProductToEdit?.price, [Validators.required, Validators.min(10), Validators.max(5000), Validators.pattern('[0-9]*')]],
          description: [this.selectProductToEdit?.description, [Validators.required, Validators.minLength(5)]]
        })
      })
    }
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
    if(this.selectProductToEdit){
      if(this.myForm.valid){
        this.selectProductToEdit = {
          id: this.selectProductToEdit.id,
          ...this.myForm.value
        }
        if (this.selectProductToEdit) {
          this.store.dispatch(EditProduct({ id: this.selectProductToEdit.id, product: this.selectProductToEdit }));
          alert("Product edited successfully!")
        }
      } else {
        alert("Something went wrong while trying to edit product details.")
      }
    }
  }

  discardChanges(){
    this.myForm.reset();
  }

  ngOnDestroy(){
    if(this.productSubscription !== undefined)
      this.productSubscription.unsubscribe();
  }

}
