import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { 
  CustomersComponent, 
  CustomerListComponent, 
  CustomerDetailComponent,
  OrdersComponent, 
  OrderListComponent, 
  OrderDetailComponent,
  OrderHistoryComponent,
  LineItemListComponent,
} from './components';
import { StateModule } from './state';
import { 
  AddressService,
  CustomerService,
  CustomerMockService,
  LineItemService,
  OrderService,
  OrderMockService,
} from './services';

export const routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    StateModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ 
    AppComponent, 
    CustomersComponent, 
    CustomerListComponent, 
    CustomerDetailComponent,
    OrdersComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderHistoryComponent,
    LineItemListComponent,
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [ 
    AddressService, 
    { provide: CustomerService, useClass: CustomerMockService }, 
    LineItemService, 
    { provide: OrderService, useClass: OrderMockService },
  ]
})
export class AppModule { }

// Implementation Log
// Started:  10:50 AM
// Completed: 3:40 PM
