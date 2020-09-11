import { RxAction } from '../../store/store.helpers';
import { ExternalOrder, InternalOrder } from '../../interfaces';

export class StoreInternalOrders extends RxAction<InternalOrder[]> {
}

export class StoreExternalOrders extends RxAction<ExternalOrder[]> {
}
