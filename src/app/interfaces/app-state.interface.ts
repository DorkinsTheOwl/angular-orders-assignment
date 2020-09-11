import { ExternalOrder, InternalOrder } from './';

export interface AppState {
  orderList: any;
}

export interface OrderListState {
  internalOrders: InternalOrder[];
  externalOrders: ExternalOrder[];
}
