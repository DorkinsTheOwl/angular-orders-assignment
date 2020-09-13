import { OrderListState } from 'src/app/interfaces';
import { RxAction } from '../../store/store.helpers';
import { PreparedOrders, SelectVariantsInPreparedOrders, StoreExternalOrders, StoreInternalOrders } from './order-list.actions';

const initialState: OrderListState = {
  internalOrders: [],
  externalOrders: [],
  preparedOrders: [],
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

    case PreparedOrders.name:
      return {
        ...state,
        preparedOrders: action.payload
      };
    case SelectVariantsInPreparedOrders.name:
      const { orderId, variant } = action.payload;
      const preparedOrders = state.preparedOrders.map(order => {
        if (order.id === orderId) {
          if (order.selectedVariants.find(({ material }) => material === variant.material)) {
            const selectedVariants = order.selectedVariants.filter(({ material }) => material !== variant.material);
            return {
              ...order,
              selectedVariants
            };
          } else {
            const selectedVariants = [...order.selectedVariants, variant];
            return {
              ...order,
              selectedVariants
            };
          }
        }

        return order;
      });

      return {
        ...state,
        preparedOrders
      };
    default:
      return state;
  }
};
