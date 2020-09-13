import { InternalOrder, OrderListState } from 'src/app/interfaces';
import { RxAction } from '../../store/store.helpers';
import {
  AddInternalOrder,
  PreparedOrders,
  SelectVariantsInPreparedOrders,
  StoreExternalOrders,
  StoreInternalOrders,
  StoreSelectedCustomerData
} from './order-list.actions';

const initialState: OrderListState = {
  internalOrders: [],
  externalOrders: [],
  preparedOrders: [],
  selectedCustomerData: null
};

export const orderListReducer = (state = initialState, action: RxAction): OrderListState => {
  switch (action.type) {
    case StoreExternalOrders.name:
      return {
        ...state,
        externalOrders: action.payload
      };
    case StoreSelectedCustomerData.name:
      return {
        ...state,
        selectedCustomerData: action.payload
      };
    case StoreInternalOrders.name:
      return {
        ...state,
        internalOrders: action.payload
      };
    case AddInternalOrder.name:
      const { customer } = state.selectedCustomerData;
      const selVariants = state.preparedOrders.reduce((acc, order) => {
        return [...acc, ...order.selectedVariants];
      }, []);

      console.log('selVariants', selVariants);

      const cost = +selVariants.reduce((acc, value) => acc + Math.ceil(value.price * 0.75), 0).toFixed(2);
      const price = +selVariants.reduce((acc, value) => acc + value.price, 0).toFixed(2);

      const internalOrder: InternalOrder = {
        id: state.internalOrders.length,
        created: new Date(),
        customer,
        selectedVariants: selVariants,
        revenue: +(price - cost).toFixed(2),
        cost,
        price,
        fulfillment: 'Ordered',
      };
      return {
        ...state,
        internalOrders: [...state.internalOrders, internalOrder],
        preparedOrders: [],
        selectedCustomerData: null
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
