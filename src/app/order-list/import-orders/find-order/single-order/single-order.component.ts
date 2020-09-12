import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, ExternalOrder } from '../../../../interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { debounce } from 'lodash';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  orderNumber: number = +this.route.snapshot.paramMap.get('id');
  orderRoute = this.router.url;
  searchForm: FormGroup = new FormGroup({
    query: new FormControl('')
  });
  debouncedPerformQuery = debounce(() => this.performQuery(), 300);
  displayedColumns: string[] = ['name', 'sku', 'select'];
  pageSizeOptions: number[] = [5, 10, 20];
  dataSource: MatTableDataSource<ExternalOrder> = new MatTableDataSource<ExternalOrder>([]);
  selectedItems: { [key: string]: Pick<ExternalOrder, 'order'> } = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    console.log(this.router.url);
  }

  ngOnInit(): void {
    this.subscriptions.add(this.store.select('orderList').subscribe(({ externalOrders }) => {
      const selectedOrder = externalOrders.find(({ id }) => id === this.orderNumber)?.order;

      this.dataSource = new MatTableDataSource<ExternalOrder>(selectedOrder);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  goBack(): void {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  performQuery(): void {
    console.log(this.searchForm.value.query);
  }

  toggleSelected(row): void {
    console.log('row', row);
    console.log('this.selectedItems[row.id]', this.selectedItems[row.id]);

    if (this.selectedItems[row.id]) {
      delete this.selectedItems[row.id];
    } else {
      this.selectedItems[row.id] = row;
    }

    console.log('this.selectedItems', this.selectedItems);
  }
}
