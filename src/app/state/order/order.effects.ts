import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, exhaustMap, mergeMap, catchError  } from 'rxjs/operators';
import {
  loadAllOrders,
  loadAllOrdersSuccess,
  loadAllOrdersFailure,
  loadOrder,
  loadOrderSuccess,
  loadOrderFailure,
  createOrder,
  createOrderSuccess,
  createOrderFailure,
  updateOrder,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrder,
  deleteOrderSuccess,
  deleteOrderFailure,
} from './order.actions';
import { OrderService } from '../../services';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllOrders),
      exhaustMap(() => 
        this.orderService.loadAll().pipe(
          map(orders => loadAllOrdersSuccess({orders})),
          catchError(err => of(loadAllOrdersFailure({err})))
        )
      )
    )
  );

  load$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadOrder),
      mergeMap(({orderId}) => 
        this.orderService.load(orderId).pipe(
          map(order => loadOrderSuccess({order})),
          catchError(err => of(loadOrderFailure({err})))
        )
      )
    )
  );

  create$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createOrder),
      concatMap(({order}) => 
        this.orderService.create(order).pipe(
          map(order => createOrderSuccess({order})),
          catchError(err => of(createOrderFailure({err})))
        )
      )
    )
  );

  update$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateOrder),
      concatMap(({order}) => 
        this.orderService.update(order).pipe(
          map(order => updateOrderSuccess({order})),
          catchError(err => of(updateOrderFailure({err})))
        )
      )
    )
  );

  delete$ = createEffect(() => 
    this.actions$.pipe(
      ofType(deleteOrder),
      exhaustMap(({orderId}) => 
        this.orderService.delete(orderId).pipe(
          map(orderId => deleteOrderSuccess({orderId})),
          catchError(err => of(deleteOrderFailure({err})))
        )
      )
    )
  );
} 