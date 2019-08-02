import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, exhaustMap, mergeMap, catchError  } from 'rxjs/operators';
import {
  loadAllAddresses,
  loadAllAddressesSuccess,
  loadAllAddressesFailure,
  loadAddress,
  loadAddressSuccess,
  loadAddressFailure,
  createAddress,
  createAddressSuccess,
  createAddressFailure,
  updateAddress,
  updateAddressSuccess,
  updateAddressFailure,
  deleteAddress,
  deleteAddressSuccess,
  deleteAddressFailure,
} from './address.actions';
import { AddressService } from '../../services';

@Injectable()
export class AddressEffects {
  constructor(private actions$: Actions, private addressService: AddressService) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllAddresses),
      exhaustMap(() => 
        this.addressService.loadAll().pipe(
          map(addresses => loadAllAddressesSuccess({addresses})),
          catchError(err => of(loadAllAddressesFailure({err})))
        )
      )
    )
  );

  load$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadAddress),
      mergeMap(({addressId}) => 
        this.addressService.load(addressId).pipe(
          map(address => loadAddressSuccess({address})),
          catchError(err => of(loadAddressFailure({err})))
        )
      )
    )
  );

  create$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createAddress),
      concatMap(({address}) => 
        this.addressService.create(address).pipe(
          map(address => createAddressSuccess({address})),
          catchError(err => of(createAddressFailure({err})))
        )
      )
    )
  );

  update$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateAddress),
      concatMap(({address}) => 
        this.addressService.update(address).pipe(
          map(address => updateAddressSuccess({address})),
          catchError(err => of(updateAddressFailure({err})))
        )
      )
    )
  );

  delete$ = createEffect(() => 
    this.actions$.pipe(
      ofType(deleteAddress),
      exhaustMap(({addressId}) => 
        this.addressService.delete(addressId).pipe(
          map(addressId => deleteAddressSuccess({addressId})),
          catchError(err => of(deleteAddressFailure({err})))
        )
      )
    )
  );
} 