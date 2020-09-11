import { OrderListState } from 'src/app/interfaces';
import { RxAction } from '../../store/store.helpers';
import { StoreOrders } from './order-list.actions';

const initialState: OrderListState = {
  internalOrders: [],
  externalOrders: []
};

export const orderListReducer = (state = initialState, action: RxAction): OrderListState => {
  switch (action.type) {
    case StoreOrders.name:
      return {
        ...state,
        internalOrders: action.payload
      };
    default:
      return state;
  }
};
