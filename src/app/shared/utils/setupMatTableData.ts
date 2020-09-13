import { MatTableDataSource } from '@angular/material/table';
import { ExternalOrder } from '../../interfaces';

export const setupMatTable = (orders, paginator, stringFilerKey) => {
  const dataSource = new MatTableDataSource<ExternalOrder>(orders);
  dataSource.paginator = paginator;
  dataSource.filterPredicate = (data, filter) => {
    if (!filter) {
      return true;
    }
    if (!!+filter) {
      return data.id === +filter;
    }
    return data[stringFilerKey].toLowerCase().includes(filter.trim().toLowerCase());
  };

  return dataSource;
};
