import { InMemoryDbService } from 'angular-in-memory-web-api';
import { externalOrders, internalOrders } from './orders.data';
import { Injectable } from '@angular/core';
import { InternalOrder } from 'src/app/interfaces';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  createDb(): { internalOrders: InternalOrder[], externalOrders: any } {
    return { internalOrders, externalOrders };
  }
}
