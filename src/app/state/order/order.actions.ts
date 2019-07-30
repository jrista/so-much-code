import { createAction, props } from '@ngrx/store';
import { Order } from '../../models';

export const selectOrder = createAction(
  '[Order] Select',
  props<{order: Order}>()
);
export const deselectOrder = createAction(
  '[Order] Deselect'
);



export const loadAllOrders = createAction(
  '[Order] Load All'
);

export const loadAllOrdersSuccess = createAction(
  '[Order] Load All: Success',
  props<{orders: Order[]}>()
);

export const loadAllOrdersFailure = createAction(
  '[Order] Load All: Failure',
  props<{err: any}>()
);



export const loadOrder = createAction(
  '[Order] Load',
  props<{orderId: number}>()
);

export const loadOrderSuccess = createAction(
  '[Order] Load: Success',
  props<{order: Order}>()
);

export const loadOrderFailure = createAction(
  '[Order] Load: Failure',
  props<{err: any}>()
);



export const createOrder = createAction(
  '[Order] Create',
  props<{order: Order}>()
);

export const createOrderSuccess = createAction(
  '[Order] Create: Success',
  props<{order: Order}>()
);

export const createOrderFailure = createAction(
  '[Order] Create: Failure',
  props<{err: any}>()
);



export const updateOrder = createAction(
  '[Order] Update',
  props<{order: Order}>()
);

export const updateOrderSuccess = createAction(
  '[Order] Update: Success',
  props<{order: Order}>()
);

export const updateOrderFailure = createAction(
  '[Order] Update: Failure',
  props<{err: any}>()
);



export const deleteOrder = createAction(
  '[Order] Delete',
  props<{orderId: number}>()
);

export const deleteOrderSuccess = createAction(
  '[Order] Delete: Success',
  props<{orderId: number}>()
);

export const deleteOrderFailure = createAction(
  '[Order] Delete: Failure',
  props<{err: any}>()
);