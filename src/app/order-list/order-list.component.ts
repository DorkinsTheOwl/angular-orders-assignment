import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AppState, InternalOrder } from '../interfaces';
import { OrderListService } from 'src/app/order-list/order-list.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreExternalOrders, StoreInternalOrders } from './store/order-list.actions';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<InternalOrder> = new MatTableDataSource<InternalOrder>([]);
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
    console.log('getting orders');
    this.orderListService.getInternalOrders().subscribe(orders => {
      this.store.dispatch(new StoreInternalOrders(orders));

      this.orderListService.getExternalOrders().subscribe(externalOrders => {
        this.store.dispatch(new StoreExternalOrders(externalOrders));
      });
    });

    this.subscriptions.add(this.store.select('orderList').subscribe(({ internalOrders }) => {
      if (internalOrders?.length) {
        this.displayedColumns = Object.keys(internalOrders[0]).map(k => k);
        this.dataSource = new MatTableDataSource<InternalOrder>(internalOrders);
        this.dataSource.paginator = this.paginator;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
