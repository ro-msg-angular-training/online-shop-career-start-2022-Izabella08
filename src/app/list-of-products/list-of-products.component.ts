import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectProductList } from '../store/selectors/product.selectors';
import { GetProductList } from '../store/actions/product.actions';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})

export class ListOfProductsComponent implements OnInit {

  constructor(
    private store: Store<IAppState>, private router: Router
  ) {}

  products$ = this.store.select(selectProductList);

  ngOnInit() {
    this.store.dispatch(GetProductList());
  }

}
