import { createReducer, on } from '@ngrx/store';
import { LineItem } from '../../models';

import {
  loadLineItemsByOrder,
  loadLineItemsByOrderSuccess,
  loadLineItemsByOrderFailure,
  createLineItem,
  createLineItemSuccess,
  createLineItemFailure,
  updateLineItem,
  updateLineItemSuccess,
  updateLineItemFailure,
  deleteLineItem,
  deleteLineItemSuccess,
  deleteLineItemFailure,
  deleteLineItemsByOrder,
  deleteLineItemsByOrderSuccess,
  deleteLineItemsByOrderFailure,
} from './lineItem.actions';

export interface ILineItemState {
  entities: { [key: string]: LineItem };
  ids: string[];
  selectedId?: number;
  isLoading?: boolean;
  isCreating?: boolean;
  isUpdating?: boolean;
  isDeleting?: boolean;
}

const initialState: ILineItemState = {
  entities: {},
  ids: [],
};

const makeKey = (lineItem: LineItem) => keyFromParts(lineItem.orderId, lineItem.productId);
const keyFromParts = (orderId: number, productId: number) => orderId + '_' + productId;
const keyIsForOrder = (key: string, orderId: number) => 
  (!!key && !!key.length) ? Number(key.split('_')[0]) === orderId : false;

export const lineItemReducer = createReducer(
  initialState,

  on(loadLineItemsByOrder, state => ({
    ...state,
    isLoading: true
  })),
  on(loadLineItemsByOrderSuccess, (state, { lineItems }) => ({
    ...state,
    isLoading: false,
    ids: lineItems.map(lineItem => makeKey(lineItem)),
    entities: lineItems.reduce((entities, lineItem) => ({
      ...entities,
      [makeKey(lineItem)]: lineItem
    }), {})
  })),
  on(loadLineItemsByOrderFailure, state => ({
    ...state,
    isLoading: false
  })),



  on(createLineItem, state => ({
    ...state,
    isCreating: true
  })),
  on(createLineItemSuccess, (state, { lineItem }) => ({
    ...state,
    isCreating: false,
    ids: [...state.ids, makeKey(lineItem)],
    entities: {
      ...state.entities,
      [makeKey(lineItem)]: lineItem
    }
  })),
  on(createLineItemFailure, state => ({
    ...state,
    isCreating: false
  })),


  on(updateLineItem, state => ({
    ...state,
    isUpdating: true
  })),
  on(updateLineItemSuccess, (state, { lineItem }) => ({
    ...state,
    isUpdating: false,
    entities: {
      ...state.entities,
      [makeKey(lineItem)]: lineItem
    }
  })),
  on(updateLineItemFailure, state => ({
    ...state,
    isUpdating: false
  })),


  on(deleteLineItem, state => ({
    ...state,
    isDeleting: true
  })),
  on(deleteLineItemSuccess, (state, { orderId, productId }) => ({
    ...state,
    isDeleting: false,
    ids: state.ids.filter(key => key !== keyFromParts(orderId, productId))
  })),
  on(deleteLineItemFailure, state => ({
    ...state,
    isDeleting: false
  })),


  on(deleteLineItemsByOrder, state => ({
    ...state,
    isDeleting: true
  })),
  on(deleteLineItemsByOrderSuccess, (state, { orderId }) => ({
    ...state,
    isDeleting: false,
    ids: state.ids.filter(key => !keyIsForOrder(key, orderId))
  })),
  on(deleteLineItemsByOrderFailure, state => ({
    ...state,
    isDeleting: false
  })),
);