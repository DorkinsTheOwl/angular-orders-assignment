import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounce } from 'lodash';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, ExternalOrder } from 'src/app/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OrderListService } from '../../order-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-find-order',
  templateUrl: './find-order.component.html',
  styleUrls: ['./find-order.component.scss']
})
export class FindOrderComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['id', 'customer', 'amount', 'volume', 'sku'];
  pageSizeOptions: number[] = [5, 10, 20];
  dataSource: MatTableDataSource<ExternalOrder> = new MatTableDataSource<ExternalOrder>([]);
  searchForm: FormGroup = new FormGroup({
    query: new FormControl('')
  });
  subscriptions: Subscription = new Subscription();
  debouncedPerformQuery = debounce(() => this.performQuery(), 300);
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
      if (externalOrders.length) {
        this.dataSource = new MatTableDataSource<ExternalOrder>(externalOrders);
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

  openSpecificQuery(row): void {
    console.log(row);
    this.router.navigate([row.id], { relativeTo: this.route });
  }
}
