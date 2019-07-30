import { ActionReducerMap } from '@ngrx/store';
// import { addressReducer, IAddressState } from './address/address.reducer';
import { customerReducer, ICustomerState } from './customer/customer.reducer';
import { lineItemReducer, ILineItemState } from './lineItem/lineItem.reducer';
import { orderReducer, IOrderState } from './order/order.reducer';

export interface IAppState {
  customer: ICustomerState;
  lineItem: ILineItemState
  order: IOrderState;
}

export const appReducer: ActionReducerMap<IAppState> = {
  customer: customerReducer,
  lineItem: lineItemReducer,
  order: orderReducer,
};