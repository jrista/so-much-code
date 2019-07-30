import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../models';

import { customerRecords } from './customer.data';

@Injectable({providedIn: 'root'})
export class CustomerMockService {
  private customers: Customer[];
  constructor(private http: HttpClient) {
    this.customers = [...customerRecords];
  }

  loadAll(): Observable<Customer[]> {
    return of([...this.customers]);
  }

  load(customerId: number): Observable<Customer> {
    return of(this.customers.find(customer => customer.id === customerId));
  }

  create(customer: Customer): Observable<Customer> {
    const newCustomer: Customer = {
      ...customer, 
      id: this.customers.reduce((max, customer) => max < customer.id ? customer.id : max, 0)
    };

    this.customers = [...this.customers, newCustomer];

    return of(newCustomer);
  }

  update(customer: Customer): Observable<Customer> {
    this.customers = this.customers.map(existingCustomer => 
      customer.id === existingCustomer.id ? customer : existingCustomer
    );

    return of(customer);
  }

  delete(customerId: number): Observable<number> {
    this.customers = this.customers.filter(customer => customer.id !== customerId);

    return of(customerId);
  }
}