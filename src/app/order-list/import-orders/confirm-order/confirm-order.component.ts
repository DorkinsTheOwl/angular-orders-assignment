import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState, SingleOrder } from '../../../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddInternalOrder } from '../../store/order-list.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  order: Observable<SingleOrder[]>;
  orderPrice: Observable<number>;

  constructor(
    private store: Store<AppState>,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.order = this.store.pipe(select('orderList'), map(({ preparedOrders }) => preparedOrders));
    this.orderPrice = this.store.pipe(select('orderList'), map(({ preparedOrders }) =>
      +preparedOrders.reduce((orderSum, order) =>
        orderSum += order.selectedVariants.reduce((variantSum, variant) =>
          variantSum += variant.price, 0), 0).toFixed(2)
    ));
  }

  confirmAndShip(): void {
    this.store.dispatch(new AddInternalOrder());
    this.snackBar.open('Order has been imported', 'Close', { duration: 3000 });
  }
}
