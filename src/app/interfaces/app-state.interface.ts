import { ExternalOrder, InternalOrder, SingleOrder } from './';

export interface AppState {
  orderList: any;
}

export interface OrderListState {
  internalOrders: InternalOrder[];
  externalOrders: ExternalOrder[];
  preparedOrders: SingleOrder[];
}
