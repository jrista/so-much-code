import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';

const getCustomerState = (state: IAppState) => state.customer;

export const allCustomers = createSelector(
  getCustomerState,
  state => state.ids.map(id => state.entities[id])
);

export const currentCustomer = createSelector(
  getCustomerState,
  state => state.selectedId ? state.entities[state.selectedId] : undefined
);

export const isCustomersLoading = createSelector(
  getCustomerState,
  state => state.isLoading
);