import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, exhaustMap, mergeMap, catchError  } from 'rxjs/operators';
import {
  loadAllCustomers,
  loadAllCustomersSuccess,
  loadAllCustomersFailure,
  loadCustomer,
  loadCustomerSuccess,
  loadCustomerFailure,
  createCustomer,
  createCustomerSuccess,
  createCustomerFailure,
  updateCustomer,
  updateCustomerSuccess,
  updateCustomerFailure,
  deleteCustomer,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} from './customer.actions';
import { CustomerService } from '../../services';

@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions, private customerService: CustomerService) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllCustomers),
      exhaustMap(() => 
        this.customerService.loadAll().pipe(
          map(customers => loadAllCustomersSuccess({customers})),
          catchError(err => of(loadAllCustomersFailure({err})))
        )
      )
    )
  );

  load$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadCustomer),
      mergeMap(({customerId}) => 
        this.customerService.load(customerId).pipe(
          map(customer => loadCustomerSuccess({customer})),
          catchError(err => of(loadCustomerFailure({err})))
        )
      )
    )
  );

  create$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createCustomer),
      concatMap(({customer}) => 
        this.customerService.create(customer).pipe(
          map(customer => createCustomerSuccess({customer})),
          catchError(err => of(createCustomerFailure({err})))
        )
      )
    )
  );

  update$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateCustomer),
      concatMap(({customer}) => 
        this.customerService.update(customer).pipe(
          map(customer => updateCustomerSuccess({customer})),
          catchError(err => of(updateCustomerFailure({err})))
        )
      )
    )
  );

  delete$ = createEffect(() => 
    this.actions$.pipe(
      ofType(deleteCustomer),
      exhaustMap(({customerId}) => 
        this.customerService.delete(customerId).pipe(
          map(customerId => deleteCustomerSuccess({customerId})),
          catchError(err => of(deleteCustomerFailure({err})))
        )
      )
    )
  );
} 