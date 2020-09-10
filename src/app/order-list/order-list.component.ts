import { Component, OnInit, ViewChild } from '@angular/core';
import ORDERS from 'src/app/shared/services/in-memory-data/orders.data';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Order } from '../interfaces';
import { OrderListService } from 'src/app/order-list/order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = Object.keys(ORDERS[0]).map(k => k);
  dataSource: MatTableDataSource<Order>;
  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private orderListService: OrderListService) {
  }

  ngOnInit(): void {
    this.orderListService.getOrders().subscribe(orders => {
      this.dataSource = new MatTableDataSource<Order>(orders);
      this.dataSource.paginator = this.paginator;
    });
  }
}
