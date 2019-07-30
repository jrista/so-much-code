import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LineItem } from '../models';

@Injectable({providedIn: 'root'})
export class LineItemService {
  constructor(private http: HttpClient) {}

  loadByOrder(orderId: number): Observable<LineItem[]> {
    return this.http.get<LineItem[]>(
      `http://somuchcode.com/api/v1/orders/${orderId}/lineItems`
    );
  }

  create(lineItem: LineItem): Observable<LineItem> {
    return this.http.post<LineItem>(
      `http://somuchcode.com/api/v1/orders/${lineItem.orderId}/lineItems`,
      lineItem
    );
  }

  update(lineItem: LineItem): Observable<LineItem> {
    return this.http.patch<LineItem>(
      `http://somuchcode.com/api/v1/orders/${lineItem.orderId}/lineItems/${lineItem.productId}`,
      lineItem
    );
  }

  delete(orderId: number, productId: number): Observable<{orderId: number, productId: number}> {
    return this.http.delete<number>(
      `http://somuchcode.com/api/v1/orders/${orderId}/lineItems/${productId}`
    ).pipe(map(() => ({orderId, productId})));
  }

  deleteByOrder(orderId: number): Observable<{orderId: number}> {
    return this.http.delete<number>(
      `http://somuchcode.com/api/v1/orders/${orderId}/lineItems`
    ).pipe(map(() => ({orderId})));
  }
}