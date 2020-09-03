import { AfterViewInit, Component, ViewChild } from '@angular/core';
import ORDERS from '../dummy-data/orders.data';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OrderListInterface } from '../interface';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements AfterViewInit {
  displayedColumns: string[] = Object.keys(ORDERS[0]).map(k => k);
  dataSource = new MatTableDataSource<OrderListInterface>(ORDERS);
  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
