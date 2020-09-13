import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounce } from 'lodash';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.scss']
})
export class SearchOrderComponent {
  searchForm: FormGroup = new FormGroup({
    query: new FormControl('')
  });
  debouncedPerformQuery = debounce(() => this.performQuery(), 200);
  @Output()
  searchQueryString = new EventEmitter<string>();

  performQuery(): void {
    this.searchQueryString.emit(this.searchForm.value.query);
  }
}
