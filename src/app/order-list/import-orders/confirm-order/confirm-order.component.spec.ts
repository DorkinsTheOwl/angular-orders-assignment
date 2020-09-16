import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOrderComponent } from './confirm-order.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { OrderListState } from '../../../interfaces';
import { cold } from 'jasmine-marbles';
import { AddInternalOrder } from '../../store/order-list.actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfirmOrderComponent', () => {
  let component: ConfirmOrderComponent;
  let fixture: ComponentFixture<ConfirmOrderComponent>;
  let mockStore: MockStore;
  let snackBar: MatSnackBar;
  const orderList: OrderListState = {
    internalOrders: [],
    externalOrders: [],
    selectedCustomerData: null,
    preparedOrders: [
      {
        id: 1,
        name: 'John Does',
        sku: 'AWD_WAD',
        variants: [{ material: 'cotton', price: 4 }, { material: 'wool', price: 5 }],
        selectedVariants: [{ material: 'cotton', price: 4.11 }]
      },
      {
        id: 2,
        name: 'Jane Doesnt',
        sku: 'RADKW_DAW',
        variants: [{ material: 'silk', price: 3 }, { material: 'wool', price: 6 }],
        selectedVariants: [{ material: 'wool', price: 6.11 }]
      }
    ]
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatSnackBarModule
      ],
      declarations: [ConfirmOrderComponent],
      providers: [
        provideMockStore({ initialState: { orderList } })
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();


    fixture = TestBed.createComponent(ConfirmOrderComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.inject(MockStore);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should populate order with preparedOrders from store after ngOnInit', () => {
    const expected = cold('a', { a: orderList.preparedOrders });
    expect(component.order).not.toBeDefined();
    fixture.detectChanges();
    expect(component.order).toBeObservable(expected);
  });

  it('should populate order with total price from preparedOrders from store after ngOnInit', () => {
    const price = +orderList.preparedOrders.reduce((orderSum, order) =>
      orderSum += order.selectedVariants.reduce((variantSum, variant) =>
        variantSum += variant.price, 0), 0).toFixed(2);
    const expected = cold('a', { a: price });
    expect(component.orderPrice).not.toBeDefined();
    fixture.detectChanges();
    expect(component.orderPrice).toBeObservable(expected);
  });

  it('should dispatch AddInternalOrder action after confirmAndShip() has been called', () => {
    const action = new AddInternalOrder();
    const spy = spyOn(mockStore, 'dispatch');

    expect(spy).not.toHaveBeenCalled();
    component.confirmAndShip();
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should call snackBar.open after confirmAndShip() has been called', () => {
    const spy = spyOn(snackBar, 'open');

    expect(spy).not.toHaveBeenCalled();
    component.confirmAndShip();
    expect(spy).toHaveBeenCalledWith('Order has been imported', 'Close', { duration: 3000 });
  });
});
