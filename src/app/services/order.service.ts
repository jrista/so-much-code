import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from '../models';

@Injectable({providedIn: 'root'})
export class OrderService {
  constructor(private http: HttpClient) {}

  loadAll() {
    return this.http.get<Order[]>(
      `http://somuchcode.briebug.com/api/v1/orders`
    );
  }

  load(orderId: number) {
    return this.http.get<Order>(
      `http://somuchcode.briebug.com/api/v1/orders/${orderId}`
    );
  }

  create(order: Order) {
    return this.http.post<Order>(
      `http://somuchcode.briebug.com/api/v1/orders`,
      order
    );
  }

  update(order: Order) {
    return this.http.patch<Order>(
      `http://somuchcode.briebug.com/api/v1/orders/${order.id}`,
      order
    );
  }

  delete(orderId: number) {
    return this.http.delete<number>(
      `http://somuchcode.briebug.com/api/v1/orders/${orderId}`
    ).pipe(map(() => orderId));
  }
}