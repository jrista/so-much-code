import { createAction, props } from '@ngrx/store';
import { Customer } from '../../models';

export const selectCustomer = createAction(
  '[Customer] Select',
  props<{customer: Customer}>()
);

export const deselectCustomer = createAction(
  '[Customer] Deselect'
);



export const loadAllCustomers = createAction(
  '[Customer] Load All'
);

export const loadAllCustomersSuccess = createAction(
  '[Customer] Load All: Success',
  props<{customers: Customer[]}>()
);

export const loadAllCustomersFailure = createAction(
  '[Customer] Load All: Failure',
  props<{err: any}>()
);



export const loadCustomer = createAction(
  '[Customer] Load',
  props<{customerId: number}>()
);

export const loadCustomerSuccess = createAction(
  '[Customer] Load: Success',
  props<{customer: Customer}>()
);

export const loadCustomerFailure = createAction(
  '[Customer] Load: Failure',
  props<{err: any}>()
);



export const createCustomer = createAction(
  '[Customer] Create',
  props<{customer: Customer}>()
);

export const createCustomerSuccess = createAction(
  '[Customer] Create: Success',
  props<{customer: Customer}>()
);

export const createCustomerFailure = createAction(
  '[Customer] Create: Failure',
  props<{err: any}>()
);



export const updateCustomer = createAction(
  '[Customer] Update',
  props<{customer: Customer}>()
);

export const updateCustomerSuccess = createAction(
  '[Customer] Update: Success',
  props<{customer: Customer}>()
);

export const updateCustomerFailure = createAction(
  '[Customer] Update: Failure',
  props<{err: any}>()
);



export const deleteCustomer = createAction(
  '[Customer] Delete',
  props<{customerId: number}>()
);

export const deleteCustomerSuccess = createAction(
  '[Customer] Delete: Success',
  props<{customerId: number}>()
);

export const deleteCustomerFailure = createAction(
  '[Customer] Delete: Failure',
  props<{err: any}>()
);