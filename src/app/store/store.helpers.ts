import { Action } from '@ngrx/store';

export abstract class RxAction<T = undefined> implements Action {
  public type: string = this.constructor.name;

  constructor(public payload?: T) {
  }
}
