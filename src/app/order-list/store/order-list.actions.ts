import { RxAction } from '../../store/store.helpers';
import { ExternalOrder, InternalOrder, SingleOrder, SingleOrderVariant } from '../../interfaces';

export class StoreInternalOrders extends RxAction<InternalOrder[]> {
}

export class StoreExternalOrders extends RxAction<ExternalOrder[]> {
}

export class PreparedOrders extends RxAction<SingleOrder[]> {
}

export class SelectVariantsInPreparedOrders extends RxAction<{
  orderId: string;
  variant: SingleOrderVariant;
}> {
}
