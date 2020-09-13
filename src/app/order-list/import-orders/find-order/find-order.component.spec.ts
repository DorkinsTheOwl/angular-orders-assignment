import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOrderComponent } from './find-order.component';
import { OrderListService } from '../../order-list.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../store/app.reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

describe('FindOrderComponent', () => {
  let component: FindOrderComponent;
  let fixture: ComponentFixture<FindOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        MatTableModule
      ],
      providers: [OrderListService],
      declarations: [FindOrderComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
