import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { LineItem } from '../../models';

const getLineItemState = (state: IAppState) => state.lineItem;

export const allLineItems = createSelector(
  getLineItemState,
  state => state.ids.map(id => state.entities[id])
);

export const orderLineItems = createSelector(
  allLineItems,
  (lineItems: LineItem[], props: { orderId: number }) => 
    lineItems.filter(lineItem => lineItem.orderId === props.orderId)
)

export const isLineItemsLoading = createSelector(
  getLineItemState,
  state => state.isLoading
);