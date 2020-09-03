import { NgModule } from '@angular/core';
import { OrderListComponent } from 'src/app/order-list/order-list.component';
import { OrderListRoutingModule } from 'src/app/order-list/order-list-routing.module';
import { ImportOrdersComponent } from './import-orders/import-orders.component';
import { ConfirmOrderComponent } from './import-orders/confirm-order/confirm-order.component';
import { FindOrderComponent } from './import-orders/find-order/find-order.component';
import { PrepareOrderComponent } from './import-orders/prepare-order/prepare-order.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    OrderListComponent,
    ImportOrdersComponent,
    ConfirmOrderComponent,
    FindOrderComponent,
    PrepareOrderComponent
  ],
  imports: [
    OrderListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class OrderListModule {
}
