import { NgModule } from '@angular/core';
import { OrderListComponent } from 'src/app/order-list/order-list.component';
import { OrderListRoutingModule } from 'src/app/order-list/order-list-routing.module';
import { ConfirmOrderComponent } from './import-orders/confirm-order/confirm-order.component';
import { FindOrderComponent } from './import-orders/find-order/find-order.component';
import { PrepareOrderComponent } from './import-orders/prepare-order/prepare-order.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { OrderListService } from 'src/app/order-list/order-list.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ImportOrdersComponent } from 'src/app/order-list/import-orders/import-orders.component';

@NgModule({
  declarations: [
    OrderListComponent,
    ImportOrdersComponent,
    ConfirmOrderComponent,
    FindOrderComponent,
    PrepareOrderComponent
  ],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  providers: [
    OrderListService
  ],
})
export class OrderListModule {
}
