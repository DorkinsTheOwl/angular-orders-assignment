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
import { ReactiveFormsModule } from '@angular/forms';
import { SingleOrderComponent } from './import-orders/find-order/single-order/single-order.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BreadcrumbComponent } from './import-orders/shared-components/breadcrumb/breadcrumb.component';
import { SearchOrderComponent } from './import-orders/shared-components/search-order/search-order.component';
import { PreparedOrdersGuardService } from './order-list-guard.service';

@NgModule({
  declarations: [
    OrderListComponent,
    ImportOrdersComponent,
    ConfirmOrderComponent,
    FindOrderComponent,
    PrepareOrderComponent,
    SingleOrderComponent,
    BreadcrumbComponent,
    SearchOrderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [
    OrderListService,
    PreparedOrdersGuardService
  ]
})
export class OrderListModule {
}
