import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from 'src/app/order-list/order-list.component';
import { NgModule } from '@angular/core';
import { ImportOrdersComponent } from 'src/app/order-list/import-orders/import-orders.component';
import { FindOrderComponent } from 'src/app/order-list/import-orders/find-order/find-order.component';
import { PrepareOrderComponent } from 'src/app/order-list/import-orders/prepare-order/prepare-order.component';
import { ConfirmOrderComponent } from 'src/app/order-list/import-orders/confirm-order/confirm-order.component';
import { SingleOrderComponent } from './import-orders/find-order/single-order/single-order.component';

const orderListRoutes: Routes = [
  {
    path: '', component: OrderListComponent, children: [
      { path: 'import', redirectTo: 'import/find' },
      {
        path: 'import', component: ImportOrdersComponent, children: [
          { path: 'find', component: FindOrderComponent },
          { path: 'find/:id', component: SingleOrderComponent },
          { path: 'prepare', component: PrepareOrderComponent },
          { path: 'confirm', component: ConfirmOrderComponent }
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(orderListRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class OrderListRoutingModule {
}
