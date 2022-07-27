import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap, concatMap  } from 'rxjs/operators';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/productService';
import { GetProductList, GetProductListeError, GetProductListSuccess, GetProduct, GetProductSucces, GetProductError, 
  DeleteProduct, DeleteProductSuccess, DeleteProductError, EditProduct, EditProductSuccess, EditProductError,
  AddProduct, AddProductError, AddProductSuccess } from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  
  constructor(
    private productService: ProductService,
    private actions$: Actions
  ) {}

  getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GetProductList),
            switchMap(() =>
                from(this.productService.getProducts()).pipe(
                    map((products) => GetProductListSuccess({ products: products })),
                    catchError((error) => of(GetProductListeError({ error })))
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
          catchError((error) => of(DeleteProductError({error})))
        ))
      )
    )
  )

  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditProduct),
      switchMap((action) =>
        from(this.productService.editProduct(action.id, action.product).pipe(map(() => action.product),
          map((product: Product) => EditProductSuccess({product})),
          catchError((error) => of(EditProductError({error})))
        ))
      )
    )
  )

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddProduct),
      switchMap((action) =>
        from(this.productService.addNewProduct(action.product)).pipe(
          map((product: any) => {
            return AddProductSuccess({ product });
          }),
          catchError((error) => of(AddProductError({error})))
        )
      )
    )
  )
  
}