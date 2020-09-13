import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PreparedOrdersGuardService implements CanActivate {
  constructor(public store: Store<AppState>, public router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select('orderList').pipe(map(({ preparedOrders }) => {
      if (!preparedOrders.length) {
        this.router.navigate(['import', 'find']);
        return false;
      }
      return true;
    }));
  }
}
