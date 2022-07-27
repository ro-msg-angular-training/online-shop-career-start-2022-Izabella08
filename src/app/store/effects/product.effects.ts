import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of, tap } from 'rxjs';
import { catchError, map, switchMap, concatMap  } from 'rxjs/operators';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/productService';
import { GetProductList, Error, GetProductListSuccess, GetProduct, GetProductSucces, 
  DeleteProduct, DeleteProductSuccess, EditProduct, EditProductSuccess,
  AddProduct, AddProductSuccess } from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  
  constructor(
    private productService: ProductService,
    private actions$: Actions,
    private router: Router
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetProductList),
        switchMap(() =>
          from(this.productService.getProducts()).pipe(
            map((products) => GetProductListSuccess({ products: products })),
              catchError((error) => of(Error({ error })))
            )
        )
    )
  );

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
        ofType(GetProduct),
        concatMap((action) => this.productService.getProductById(action.id)),
        map((product) => GetProductSucces({ product: product })))
  );

  deleteProduct$ = createEffect(() => 
    this.actions$.pipe(
      ofType(DeleteProduct),
      switchMap((action) => 
        from(this.productService.deleteProduct(action.id).pipe(
          map(() => DeleteProductSuccess()),
          catchError((error) => of(Error({error})))
        ))
      )
    )
  )

  deleteProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DeleteProductSuccess),
        tap(({}) => {
          alert("Product deleted successfully!");
          this.router.navigateByUrl('/list-of-products').then();
        })
      ),
    { dispatch: false }
  );

  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditProduct),
      switchMap((action) =>
        from(this.productService.editProduct(action.product).pipe(map(() => action.product),
          map((product: Product) => EditProductSuccess({product})),
          catchError((error) => of(Error({error})))
        ))
      )
    )
  )

  editProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EditProductSuccess),
        tap(({}) => {
          alert("Product edited successfully!");
          this.router.navigateByUrl('/list-of-products').then();
        })
      ),
    { dispatch: false }
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddProduct),
      switchMap((action) =>
        from(this.productService.addNewProduct(action.product)).pipe(
          map((product: any) => {
            return AddProductSuccess({ product });
          }),
          catchError((error) => of(Error({error})))
        )
      )
    )
  )

  addProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AddProductSuccess),
        tap(({}) => {
          alert("Product added successfully!");
          this.router.navigateByUrl('/list-of-products').then();
        })
      ),
    { dispatch: false }
  );
  
}