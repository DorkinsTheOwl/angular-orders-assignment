import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, ExternalOrder, SingleOrder, SingleOrderVariant } from '../../../interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { setupMatTable } from '../../../shared/utils';
import { MatPaginator } from '@angular/material/paginator';
import { take } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { SelectVariantsInPreparedOrders } from '../../store/order-list.actions';

@Component({
  selector: 'app-prepare-order',
  templateUrl: './prepare-order.component.html',
  styleUrls: ['./prepare-order.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PrepareOrderComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['name', 'sku', 'select'];
  dataSource: MatTableDataSource<ExternalOrder> = new MatTableDataSource<ExternalOrder>([]);
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  expandedElement: Pick<SingleOrder, 'variants'> = null;
  filterString: string;
  selectedVariants: { [key: string]: SingleOrderVariant[] } = {};
  subscriptions: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {
  }

  ngAfterViewInit(): void {
    this.store.select('orderList').pipe(take(1)).subscribe(({ preparedOrders }) => {
      if (preparedOrders?.length) {
        this.dataSource = setupMatTable(preparedOrders, this.paginator, 'name');
      }
    });

    this.subscriptions.add(this.store.select('orderList').subscribe(({ preparedOrders }) => {
      this.selectedVariants = preparedOrders.reduce((acc, { id, selectedVariants }) => {
        acc[id] = selectedVariants;
        return acc;
      }, {});
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getFilteredVariants(variants: SingleOrderVariant[]): SingleOrderVariant[] {
    if (this.filterString) {
      return variants.filter(variant => variant.material.toLowerCase().includes(this.filterString.toLowerCase()));
    }
    return variants;
  }

  filterData(searchQuery: string): void {
    this.filterString = searchQuery;
  }

  isVariantSelected(id: string, variant: SingleOrderVariant): boolean {
    if (!this.selectedVariants[id]?.length) {
      return false;
    }

    return !!this.selectedVariants[id].find(item => variant?.material === item.material);
  }

  onItemToggle(id: string, variant: SingleOrderVariant): void {
    this.store.dispatch(new SelectVariantsInPreparedOrders({ orderId: id, variant }));
  }

  isNextDisabled(): boolean {
    return Object.values(this.selectedVariants).every(item => !item.length);
  }

  hasItemsSelected(order: SingleOrder): boolean {
    return !!this.selectedVariants[order.id]?.length;
  }
}
