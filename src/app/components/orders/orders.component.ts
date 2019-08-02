import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import {
  IAppState, 

  // Actions
  loadAllOrders, 
  deleteOrder,
  selectOrder,
  deselectOrder,
  loadLineItemsByOrder,

  // Selectors
  allOrders, 
  orderLineItems,
  currentOrder,
  isOrdersLoading 
} from '../../state';
import { Order, LineItem } from '../../models';

@Component({
  selector: 'app-orders', 
  templateUrl: './orders.component.html' 
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  currentOrder$: Observable<Order | undefined>;
  currentLineItems$: Observable<LineItem[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.orders$ = this.store.pipe(select(allOrders));
    this.currentOrder$ = this.store.pipe(
      select(currentOrder),
      tap(order => console.log(order)),
      filter(order => !!order),
      tap(order => 
        this.store.dispatch(loadLineItemsByOrder({orderId: order.id}))
      ),
      tap(order => 
        this.currentLineItems$ = this.store.pipe(select(orderLineItems, {orderId: order.id}))
      )
    );
    
    this.isLoading$ = this.store.pipe(select(isOrdersLoading));

    this.store.dispatch(loadAllOrders());
  }

  onDelete(order: Order): void {
    this.store.dispatch(deleteOrder({ orderId: order.id }));
  }

  onSelect(order: Order): void {
    this.store.dispatch(selectOrder({order}));
  }

  onClose(): void {
    this.store.dispatch(deselectOrder());
  }
}