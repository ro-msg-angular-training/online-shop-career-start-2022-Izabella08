import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProductIdQuantity } from '../entities/productIdQuantity';
import { DeleteProduct, GetProduct } from '../store/actions/product.actions';
import { AddItemToCart } from '../store/actions/shopping-cart.actions';
import { selectProduct } from '../store/selectors/product.selectors';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private store: Store<IAppState>, 
    private route: ActivatedRoute,
  ) {}

  id: string | null | undefined;
  selectOneProduct$ = this.store.select(selectProduct);
  productToCart: ProductIdQuantity;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.store.dispatch(GetProduct({id: this.id}))
    }
  }

  deleteProduct(){
   if(this.id){
      this.store.dispatch(DeleteProduct({id: this.id}));
    }
  }

  addProductToCart(){
    if(this.id){
      this.store.dispatch(AddItemToCart({ id: Number(this.id) }));
      alert("Product added to cart successfully!");
    }
  }

}
