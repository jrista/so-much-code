import { createReducer, on } from '@ngrx/store';
import { Order } from '../../models';

import {
  selectOrder,
  deselectOrder,
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

export interface IOrderState {
  entities: { [key: number]: Order };
  ids: number[];
  selectedId?: number;
  isLoading?: boolean;
  isCreating?: boolean;
  isUpdating?: boolean;
  isDeleting?: boolean;
}

const initialState: IOrderState = {
  entities: {},
  ids: [],
};

export const orderReducer = createReducer(
  initialState,

  on(selectOrder, (state, {order}) => ({
      ...state,
      selectedId: order.id
  })),
  on(deselectOrder, state => ({
      ...state,
      selectedId: undefined
  })),

  on(loadAllOrders, state => ({
    ...state,
    isLoading: true
  })),
  on(loadAllOrdersSuccess, (state, { orders }) =>  ({
    ...state,
    isLoading: false,
    ids: orders.map(order => order.id),
    entities: orders.reduce((entities, order) => ({
      ...entities,
      [order.id]: order
    }), {})
  })),
  on(loadAllOrdersFailure, state => ({
    ...state,
    isLoading: false
  })),


  on(loadOrder, state => ({
    ...state,
    isLoading: true
  })),
  on(loadOrderSuccess, (state, { order }) => ({
    ...state,
    isLoading: false,
    ids: state.ids.indexOf(order.id) > -1 ? [
      ...state.ids, order.id
    ] : state.ids,
    entities: {
      ...state.entities,
      [order.id]: order
    }
  })),
  on(loadOrderFailure, state => ({
    ...state,
    isLoading: false
  })),


  on(createOrder, state => ({
    ...state,
    isCreating: true
  })),
  on(createOrderSuccess, (state, { order }) => ({
    ...state,
    isCreating: false,
    ids: [...state.ids, order.id],
    entities: {
      ...state.entities,
      [order.id]: order
    }
  })),
  on(createOrderFailure, state => ({
    ...state,
    isCreating: false
  })),


  on(updateOrder, state => ({
    ...state,
    isUpdating: true
  })),
  on(updateOrderSuccess, (state, { order }) => ({
    ...state,
    isUpdating: false,
    entities: {
      ...state.entities,
      [order.id]: order
    }
  })),
  on(updateOrderFailure, state => ({
    ...state,
    isUpdating: false
  })),


  on(deleteOrder, state => ({
    ...state,
    isDeleting: true
  })),
  on(deleteOrderSuccess, (state, { orderId }) => ({
    ...state,
    isDeleting: false,
    ids: state.ids.filter(id => id !== orderId)
  })),
  on(deleteOrderFailure, state => ({
    ...state,
    isDeleting: false
  })),
);