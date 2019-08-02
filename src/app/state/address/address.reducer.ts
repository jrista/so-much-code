import { createReducer, on } from '@ngrx/store';
import { Address } from '../../models';

import {
  selectAddress,
  deselectAddress,
  loadAllAddresses,
  loadAllAddressesSuccess,
  loadAllAddressesFailure,
  loadAddress,
  loadAddressSuccess,
  loadAddressFailure,
  createAddress,
  createAddressSuccess,
  createAddressFailure,
  updateAddress,
  updateAddressSuccess,
  updateAddressFailure,
  deleteAddress,
  deleteAddressSuccess,
  deleteAddressFailure,
} from './address.actions';

export interface IAddressState {
  entities: { [key: number]: Address };
  ids: number[];
  selectedId?: number;
  isLoading?: boolean;
  isCreating?: boolean;
  isUpdating?: boolean;
  isDeleting?: boolean;
}

const initialState: IAddressState = {
  entities: {},
  ids: [],
};

export const addressReducer = createReducer(
  initialState,

  on(selectAddress, (state, {address}) => ({
      ...state,
      selectedId: address.id
  })),
  on(deselectAddress, state => ({
      ...state,
      selectedId: undefined
  })),
  

  on(loadAllAddresses, state => ({
    ...state,
    isLoading: true
  })),
  on(loadAllAddressesSuccess, (state, { addresses }) => ({
    ...state,
    isLoading: false,
    ids: addresses.map(address => address.id),
    entities: addresses.reduce((entities, address) => ({
      ...entities,
      [address.id]: address
    }), {})
  })),
  on(loadAllAddressesFailure, state => ({
    ...state,
    isLoading: false
  })),


  on(loadAddress, state => ({
    ...state,
    isLoading: true
  })),
  on(loadAddressSuccess, (state, { address }) => ({
    ...state,
    isLoading: false,
    ids: state.ids.indexOf(address.id) > -1 ? [
      ...state.ids, address.id
    ] : state.ids,
    entities: {
      ...state.entities,
      [address.id]: address
    }
  })),
  on(loadAddressFailure, state => ({
    ...state,
    isLoading: false
  })),


  on(createAddress, state => ({
    ...state,
    isCreating: true
  })),
  on(createAddressSuccess, (state, { address }) => ({
    ...state,
    isCreating: false,
    ids: [...state.ids, address.id],
    entities: {
      ...state.entities,
      [address.id]: address
    }
  })),
  on(createAddressFailure, state => ({
    ...state,
    isCreating: false
  })),


  on(updateAddress, state => ({
    ...state,
    isUpdating: true
  })),
  on(updateAddressSuccess, (state, { address }) => ({
    ...state,
    isUpdating: false,
    entities: {
      ...state.entities,
      [address.id]: address
    }
  })),
  on(updateAddressFailure, state => ({
    ...state,
    isUpdating: false
  })),


  on(deleteAddress, state => ({
    ...state,
    isDeleting: true
  })),
  on(deleteAddressSuccess, (state, { addressId }) => ({
    ...state,
    isDeleting: false,
    ids: state.ids.filter(id => id !== addressId)
  })),
  on(deleteAddressFailure, state => ({
    ...state,
    isDeleting: false
  })),
);