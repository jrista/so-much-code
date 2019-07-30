import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, exhaustMap, mergeMap, catchError  } from 'rxjs/operators';
import {
  loadLineItemsByOrder,
  loadLineItemsByOrderSuccess,
  loadLineItemsByOrderFailure,
  createLineItem,
  createLineItemSuccess,
  createLineItemFailure,
  updateLineItem,
  updateLineItemSuccess,
  updateLineItemFailure,
  deleteLineItem,
  deleteLineItemSuccess,
  deleteLineItemFailure,
  deleteLineItemsByOrder,
  deleteLineItemsByOrderSuccess,
  deleteLineItemsByOrderFailure,
} from './lineItem.actions';
import { LineItemService } from '../../services';

@Injectable()
export class LineItemEffects {
  constructor(private actions$: Actions, private lineItemService: LineItemService) {}

  loadByOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLineItemsByOrder),
      exhaustMap(({orderId}) => 
        this.lineItemService.loadByOrder(orderId).pipe(
          map(lineItems => loadLineItemsByOrderSuccess({lineItems})),
          catchError(err => of(loadLineItemsByOrderFailure({err})))
        )
      )
    )
  );

  create$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createLineItem),
      concatMap(({lineItem}) => 
        this.lineItemService.create(lineItem).pipe(
          map(lineItem => createLineItemSuccess({lineItem})),
          catchError(err => of(createLineItemFailure({err})))
        )
      )
    )
  );

  update$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateLineItem),
      concatMap(({lineItem}) => 
        this.lineItemService.update(lineItem).pipe(
          map(lineItem => updateLineItemSuccess({lineItem})),
          catchError(err => of(updateLineItemFailure({err})))
        )
      )
    )
  );

  delete$ = createEffect(() => 
    this.actions$.pipe(
      ofType(deleteLineItem),
      exhaustMap(({orderId, productId}) => 
        this.lineItemService.delete(orderId, productId).pipe(
          map(({orderId, productId}) => deleteLineItemSuccess({orderId, productId})),
          catchError(err => of(deleteLineItemFailure({err})))
        )
      )
    )
  );

    deleteByOrder$ = createEffect(() => 
    this.actions$.pipe(
      ofType(deleteLineItemsByOrder),
      exhaustMap(({orderId}) => 
        this.lineItemService.deleteByOrder(orderId).pipe(
          map(({orderId}) => deleteLineItemsByOrderSuccess({orderId})),
          catchError(err => of(deleteLineItemsByOrderFailure({err})))
        )
      )
    )
  );
} 