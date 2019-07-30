import { createAction, props } from '@ngrx/store';
import { LineItem } from '../../models';



export const loadLineItemsByOrder = createAction(
  '[LineItem] Load by Order',
  props<{orderId: number}>()
);

export const loadLineItemsByOrderSuccess = createAction(
  '[LineItem] Load by Order: Success',
  props<{lineItems: LineItem[]}>()
);

export const loadLineItemsByOrderFailure = createAction(
  '[LineItem] Load by Order: Failure',
  props<{err: any}>()
);




export const createLineItem = createAction(
  '[LineItem] Create',
  props<{lineItem: LineItem}>()
);

export const createLineItemSuccess = createAction(
  '[LineItem] Create: Success',
  props<{lineItem: LineItem}>()
);

export const createLineItemFailure = createAction(
  '[LineItem] Create: Failure',
  props<{err: any}>()
);



export const updateLineItem = createAction(
  '[LineItem] Update',
  props<{lineItem: LineItem}>()
);

export const updateLineItemSuccess = createAction(
  '[LineItem] Update: Success',
  props<{lineItem: LineItem}>()
);

export const updateLineItemFailure = createAction(
  '[LineItem] Update: Failure',
  props<{err: any}>()
);



export const deleteLineItem = createAction(
  '[LineItem] Delete',
  props<{orderId: number, productId: number}>()
);

export const deleteLineItemSuccess = createAction(
  '[LineItem] Delete: Success',
  props<{orderId: number, productId: number}>()
);

export const deleteLineItemFailure = createAction(
  '[LineItem] Delete: Failure',
  props<{err: any}>()
);



export const deleteLineItemsByOrder = createAction(
  '[LineItem] Delete by Order',
  props<{orderId: number}>()
);

export const deleteLineItemsByOrderSuccess = createAction(
  '[LineItem] Delete by Order: Success',
  props<{orderId: number}>()
);

export const deleteLineItemsByOrderFailure = createAction(
  '[LineItem] Delete by Order: Failure',
  props<{err: any}>()
);