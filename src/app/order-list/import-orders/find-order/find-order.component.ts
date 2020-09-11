import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounce } from 'lodash';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, InternalOrder } from 'src/app/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OrderListService } from '../../order-list.service';
import { StoreExternalOrders } from '../../store/order-list.actions';

@Component({
  selector: 'app-find-order',
  templateUrl: './find-order.component.html',
  styleUrls: ['./find-order.component.scss']
})
export class FindOrderComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'customer', 'amount', 'volume', 'sku'];
  pageSizeOptions: number[] = [5, 10, 20];
  dataSource: MatTableDataSource<InternalOrder>;
  searchForm: FormGroup = new FormGroup({
    query: new FormControl('')
  });
  subscriptions: Subscription = new Subscription();
  searchQuery = debounce(() => this.performQuery(), 300);
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private orderListService: OrderListService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.orderListService.getExternalOrders().subscribe(orders => {
      this.store.dispatch(new StoreExternalOrders(orders));
    });

    this.subscriptions.add(this.store.select('orderList').subscribe(({ externalOrders }) => {
      if (externalOrders.length) {
        this.dataSource = new MatTableDataSource<InternalOrder>(externalOrders);
        this.dataSource.paginator = this.paginator;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  performQuery(): void {
    console.log(this.searchForm.value.query);
  }
}
