import { ExternalOrder, InternalOrder, SingleOrder } from './';

export interface AppState {
  orderList: OrderListState;
}

export interface OrderListState {
  internalOrders: InternalOrder[];
  externalOrders: ExternalOrder[];
  preparedOrders: SingleOrder[];
  selectedCustomerData: ExternalOrder;
}
