import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import ORDERS from 'src/app/shared/services/in-memory-data/orders.data';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Order } from '../interfaces';
import { OrderListService } from 'src/app/order-list/order-list.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import AppState from '../interfaces/app-state.interface';
import { StoreOrders } from './store/order-list.actions';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = Object.keys(ORDERS[0]).map(k => k);
  dataSource: MatTableDataSource<Order>;
  pageSizeOptions: number[] = [5, 10, 20];
  subscriptions: Subscription = new Subscription();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private orderListService: OrderListService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.orderListService.getOrders().subscribe(orders => {
      this.store.dispatch(new StoreOrders(orders));
    });

    this.subscriptions.add(this.store.select('orderList').subscribe(({ orders }) => {
      if (orders) {
        this.dataSource = new MatTableDataSource<Order>(orders);
        this.dataSource.paginator = this.paginator;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
