import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';

const getOrderState = (state: IAppState) => state.order;

export const allOrders = createSelector(
  getOrderState,
  state => state.ids.map(id => state.entities[id])
);

export const currentOrder = createSelector(
  getOrderState,
  state => {
    console.log('select currentOrder', state);
    return state.selectedId ? state.entities[state.selectedId] : undefined
  }
);

export const isOrdersLoading = createSelector(
  getOrderState,
  state => state.isLoading
);