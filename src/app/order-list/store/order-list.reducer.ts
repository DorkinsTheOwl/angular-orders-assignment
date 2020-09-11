import { OrderListState } from 'src/app/interfaces';
import { RxAction } from '../../store/store.helpers';
import { StoreExternalOrders, StoreInternalOrders } from './order-list.actions';

const initialState: OrderListState = {
  internalOrders: [],
  externalOrders: []
};

export const orderListReducer = (state = initialState, action: RxAction): OrderListState => {
  switch (action.type) {
    case StoreExternalOrders.name:
      return {
        ...state,
        externalOrders: action.payload
      };
    case StoreInternalOrders.name:
      return {
        ...state,
        internalOrders: action.payload
      };
    default:
      return state;
  }
};
