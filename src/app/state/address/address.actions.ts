import { createAction, props } from '@ngrx/store';
import { Address } from '../../models';


export const loadAllAddresses = createAction(
  '[Address] Load All',
  props<{}>()
);

export const loadAllAddressesSuccess = createAction(
  '[Address] Load All: Success',
  props<{addresss: Address[]}>()
);

export const loadAllAddressesFailure = createAction(
  '[Address] Load All: Failure',
  props<{err: any}>()
);



export const loadAddress = createAction(
  '[Address] Load',
  props<{addressId: number}>()
);

export const loadAddressSuccess = createAction(
  '[Address] Load: Success',
  props<{address: Address}>()
);

export const loadAddressFailure = createAction(
  '[Address] Load: Failure',
  props<{err: any}>()
);



export const createAddress = createAction(
  '[Address] Create',
  props<{address: Address}>()
);

export const createAddressSuccess = createAction(
  '[Address] Create: Success',
  props<{address: Address}>()
);

export const createAddressFailure = createAction(
  '[Address] Create: Failure',
  props<{err: any}>()
);



export const updateAddress = createAction(
  '[Address] Update',
  props<{address: Address}>()
);

export const updateAddressSuccess = createAction(
  '[Address] Update: Success',
  props<{address: Address}>()
);

export const updateAddressFailure = createAction(
  '[Address] Update: Failure',
  props<{err: any}>()
);



export const deleteAddress = createAction(
  '[Address] Delete',
  props<{address: Address}>()
);

export const deleteAddressSuccess = createAction(
  '[Address] Delete: Success',
  props<{addressId: number}>()
);

export const deleteAddressFailure = createAction(
  '[Address] Delete: Failure',
  props<{err: any}>()
);