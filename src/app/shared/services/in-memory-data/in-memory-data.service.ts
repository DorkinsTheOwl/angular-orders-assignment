import { InMemoryDbService } from 'angular-in-memory-web-api';
import ORDERS from './orders.data';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/interfaces';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  createDb(): { orders: Order[] } {
    return { orders: ORDERS };
  }
}
