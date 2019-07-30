import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Address } from '../models';

@Injectable({providedIn: 'root'})
export class AddressService {
  constructor(private http: HttpClient) {}

  loadAll() {
    return this.http.get<Address[]>(
      `http://somuchcode.briebug.com/api/v1/addresss`
    );
  }

  load(addressId: number) {
    return this.http.get<Address>(
      `http://somuchcode.briebug.com/api/v1/addresss/${addressId}`
    );
  }

  create(address: Address) {
    return this.http.post<Address>(
      `http://somuchcode.briebug.com/api/v1/addresss`,
      address
    );
  }

  update(address: Address) {
    return this.http.patch<Address>(
      `http://somuchcode.briebug.com/api/v1/addresss/${address.id}`,
      address
    );
  }

  delete(addressId: number) {
    return this.http.delete<number>(
      `http://somuchcode.briebug.com/api/v1/addresss/${addressId}`
    ).pipe(map(() => addressId));
  }
}