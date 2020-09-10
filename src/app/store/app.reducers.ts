import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import AppState from 'src/app/interfaces/app-state.interface';
import { orderListReducer as orderList } from '../order-list/store/order-list.reducer';
import { RxAction } from './store.helpers';

function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action: any) => {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }

    return reducer(state, action);
  };
}


function stateLogger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: AppState, action: RxAction) => {
    const nextState = reducer(state, action);
    console.groupCollapsed('[STATE] Action: ' + action.type);
    console.log('Payload:', action.payload);
    console.log('State:', nextState);
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [stateSetter, stateLogger];


export const reducers: ActionReducerMap<AppState> = {
  orderList
};
