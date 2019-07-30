import { createReducer, on } from '@ngrx/store';
import { Customer } from '../../models';

import {
  selectCustomer,
  deselectCustomer,
  loadAllCustomers,
  loadAllCustomersSuccess,
  loadAllCustomersFailure,
  loadCustomer,
  loadCustomerSuccess,
  loadCustomerFailure,
  createCustomer,
  createCustomerSuccess,
  createCustomerFailure,
  updateCustomer,
  updateCustomerSuccess,
  updateCustomerFailure,
  deleteCustomer,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} from './customer.actions';

export interface ICustomerState {
  entities: { [key: number]: Customer };
  ids: number[];
  selectedId?: number;
  isLoading?: boolean;
  isCreating?: boolean;
  isUpdating?: boolean;
  isDeleting?: boolean;
}

const initialState: ICustomerState = {
  entities: {},
  ids: [],
};

export const customerReducer = createReducer(
  initialState,

  on(selectCustomer, (state, {customer}) => ({
      ...state,
      selectedId: customer.id
  })),
  on(deselectCustomer, state => ({
      ...state,
      selectedId: undefined
  })),
  

  on(loadAllCustomers, state => ({
    ...state,
    isLoading: true
  })),
  on(loadAllCustomersSuccess, (state, { customers }) => ({
    ...state,
    isLoading: false,
    ids: customers.map(customer => customer.id),
    entities: customers.reduce((entities, customer) => ({
      ...entities,
      [customer.id]: customer
    }), {})
  })),
  on(loadAllCustomersFailure, state => ({
    ...state,
    isLoading: false
  })),


  on(loadCustomer, state => ({
    ...state,
    isLoading: true
  })),
  on(loadCustomerSuccess, (state, { customer }) => ({
    ...state,
    isLoading: false,
    ids: state.ids.indexOf(customer.id) > -1 ? [
      ...state.ids, customer.id
    ] : state.ids,
    entities: {
      ...state.entities,
      [customer.id]: customer
    }
  })),
  on(loadCustomerFailure, state => ({
    ...state,
    isLoading: false
  })),


  on(createCustomer, state => ({
    ...state,
    isCreating: true
  })),
  on(createCustomerSuccess, (state, { customer }) => ({
    ...state,
    isCreating: false,
    ids: [...state.ids, customer.id],
    entities: {
      ...state.entities,
      [customer.id]: customer
    }
  })),
  on(createCustomerFailure, state => ({
    ...state,
    isCreating: false
  })),


  on(updateCustomer, state => ({
    ...state,
    isUpdating: true
  })),
  on(updateCustomerSuccess, (state, { customer }) => ({
    ...state,
    isUpdating: false,
    entities: {
      ...state.entities,
      [customer.id]: customer
    }
  })),
  on(updateCustomerFailure, state => ({
    ...state,
    isUpdating: false
  })),


  on(deleteCustomer, state => ({
    ...state,
    isDeleting: true
  })),
  on(deleteCustomerSuccess, (state, { customerId }) => ({
    ...state,
    isDeleting: false,
    ids: state.ids.filter(id => id !== customerId)
  })),
  on(deleteCustomerFailure, state => ({
    ...state,
    isDeleting: false
  })),
);