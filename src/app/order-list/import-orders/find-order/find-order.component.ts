import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, ExternalOrder } from 'src/app/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OrderListService } from '../../order-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { setupMatTable } from '../../../shared/utils';

@Component({
  selector: 'app-find-order',
  templateUrl: './find-order.component.html',
  styleUrls: ['./find-order.component.scss']
})
export class FindOrderComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['id', 'customer', 'amount', 'volume', 'sku'];
  dataSource: MatTableDataSource<ExternalOrder> = new MatTableDataSource<ExternalOrder>([]);
  subscriptions: Subscription = new Subscription();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private orderListService: OrderListService,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngAfterViewInit(): void {
    this.subscriptions.add(this.store.select('orderList').subscribe(({ externalOrders }) => {
      if (externalOrders?.length) {
        this.dataSource = setupMatTable(externalOrders, this.paginator, 'customer');
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  filterData(searchQuery): void {
    this.dataSource.filter = searchQuery;
  }

  openSpecificQuery(row): void {
    this.router.navigate([row.id], { relativeTo: this.route });
  }
}
