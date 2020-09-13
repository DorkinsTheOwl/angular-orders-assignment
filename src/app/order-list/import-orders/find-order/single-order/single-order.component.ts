import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, ExternalOrder, SingleOrder } from '../../../../interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { setupMatTable } from '../../../../shared/utils';
import { PreparedOrders, StoreSelectedCustomerData } from '../../../store/order-list.actions';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements AfterViewInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  orderNumber: number = +this.route.snapshot.paramMap.get('id');
  orderRoute = this.router.url;
  displayedColumns: string[] = ['name', 'sku', 'select'];
  dataSource: MatTableDataSource<ExternalOrder> = new MatTableDataSource<ExternalOrder>([]);
  selectedItems: { [key: string]: SingleOrder } = {};
  selectedItemsLength = (): number => Object.keys(this.selectedItems).length;
  dataSourceLength = (): number => this.dataSource.data.length;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  isAllSelected = (): boolean =>
    this.selectedItemsLength() &&
    this.dataSourceLength() &&
    this.selectedItemsLength() === this.dataSourceLength();
  hasSomeSelected = (): boolean => !!this.selectedItemsLength();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  ngAfterViewInit(): void {
    this.subscriptions.add(this.store.select('orderList').subscribe(({ externalOrders, selectedCustomerData }) => {
      const selectedOrder = externalOrders.find(({ id }) => id === this.orderNumber);
      if (selectedOrder?.order?.length) {
        this.dataSource = setupMatTable(selectedOrder.order, this.paginator, 'name');
      }

      if (!selectedCustomerData && selectedOrder) {
        this.store.dispatch(new StoreSelectedCustomerData(selectedOrder));
      }
    }));

    this.store.dispatch(new PreparedOrders([]));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  goBack(): void {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  filterData(searchQuery: string): void {
    this.dataSource.filter = searchQuery;
  }

  toggleSelected(row: SingleOrder): void {
    if (this.selectedItems[row.id]) {
      delete this.selectedItems[row.id];
    } else {
      this.selectedItems[row.id] = row;
    }

    this.store.dispatch(new PreparedOrders(Object.values(this.selectedItems)));
  }

  isChecked(row: SingleOrder): boolean {
    return !!this.selectedItems[row.id];
  }

  masterToggle(): void {
    if (this.selectedItemsLength()) {
      this.selectedItems = {};
    } else {
      this.selectedItems = Object.values(this.dataSource.data).reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
      }, {});
    }

    this.store.dispatch(new PreparedOrders(Object.values(this.selectedItems)));
  }
}
