import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  IAppState, 

  // Actions
  loadAllCustomers, 
  deleteCustomer,
  selectCustomer,
  deselectCustomer,

  // Selectors
  allCustomers, 
  currentCustomer,
  isCustomersLoading 
} from '../../state';
import { Customer } from '../../models';

@Component({
  selector: 'app-customers', 
  templateUrl: './customers.component.html' 
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;
  currentCustomer$: Observable<Customer | undefined>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.customers$ = this.store.pipe(select(allCustomers));
    this.currentCustomer$ = this.store.pipe(select(currentCustomer));
    this.isLoading$ = this.store.pipe(select(isCustomersLoading));

    this.store.dispatch(loadAllCustomers());
  }

  onDelete(customer: Customer): void {
    this.store.dispatch(deselectCustomer());
    this.store.dispatch(deleteCustomer({ customerId: customer.id }));
  }

  onSelect(customer: Customer): void {
    this.store.dispatch(selectCustomer({customer}));
  }

  onClosed(): void {
    this.store.dispatch(deselectCustomer());
  }
}