import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Customer } from '../models';

@Injectable({providedIn: 'root'})
export class CustomerService {
  constructor(private http: HttpClient) {}

  loadAll() {
    return this.http.get<Customer[]>(
      `http://somuchcode.briebug.com/api/v1/customers`
    );
  }

  load(customerId: number) {
    return this.http.get<Customer>(
      `http://somuchcode.briebug.com/api/v1/customers/${customerId}`
    );
  }

  create(customer: Customer) {
    return this.http.post<Customer>(
      `http://somuchcode.briebug.com/api/v1/customers`,
      customer
    );
  }

  update(customer: Customer) {
    return this.http.patch<Customer>(
      `http://somuchcode.briebug.com/api/v1/customers/${customer.id}`,
      customer
    );
  }

  delete(customerId: number) {
    return this.http.delete<number>(
      `http://somuchcode.briebug.com/api/v1/customers/${customerId}`
    ).pipe(map(() => customerId));
  }
}