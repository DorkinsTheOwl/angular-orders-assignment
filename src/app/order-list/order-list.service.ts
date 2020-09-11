import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrderListService {
  constructor(private http: HttpClient) {
  }

  getInternalOrders(): Observable<any> {
    return this.http.get('api/internalOrders');
  }

  getExternalOrders(): Observable<any> {
    return this.http.get('api/externalOrders');
  }
}
