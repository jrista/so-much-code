import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../models';
import { orderRecords } from './order.data';

@Injectable({providedIn: 'root'})
export class OrderMockService {
  private orders: Order[];
  constructor(private http: HttpClient) {
      this.orders = [...orderRecords];
  }

  loadAll(): Observable<Order[]> {
    return of([...this.orders]);
  }

  load(orderId: number): Observable<Order> {
    return of(this.orders.find(order => order.id === orderId));
  }

  create(order: Order) {
    const newOrder: Order = {
      ...order, 
      id: this.orders.reduce((max, order) => max < order.id ? order.id : max, 0)
    };

    this.orders = [...this.orders, newOrder];

    return of(newOrder);
  }

  update(order: Order) {
    this.orders = this.orders.map(existingOrder => 
      order.id === existingOrder.id ? order : existingOrder
    );

    return of(order);
  }

  delete(orderId: number) {
    this.orders = this.orders.filter(order => order.id !== orderId);

    return of(orderId);
  }
}