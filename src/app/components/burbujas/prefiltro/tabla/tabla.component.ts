import { Component, OnInit } from '@angular/core';
import { FdDate } from '@fundamental-ngx/core';
import { TableDataSource, TableDataProvider, TableState } from '@fundamental-ngx/platform';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  source: TableDataSource<ExampleItem>;

  constructor() {
    this.source = new TableDataSource(new TableDataProviderExample());
  }
  ngOnInit(): void {}

  trackBy(index: number, item: ExampleItem): number {
    return item.id;
  }

  alert(message: string): void {
    alert(message);
  }
}

export interface ExampleItem {
  id: number;
  name: string;
  description: string;
  price: {
    value: number;
    currency: string;
  };
  status: string;
  statusColor?: string;
  date: FdDate;
  verified: boolean;
}

/**
 * Table Data Provider Example
 *
 */
export class TableDataProviderExample extends TableDataProvider<ExampleItem> {
  override items: ExampleItem[] = [...ITEMS];
  override totalItems = ITEMS.length;

  override fetch(tableState?: TableState): Observable<ExampleItem[]> {
    this.items = [...ITEMS];

    // apply searching
    if (tableState?.searchInput) {
      this.items = this.search(this.items, tableState);
    }

    this.totalItems = this.items.length;

    return of(this.items);
  }

  override search(items: ExampleItem[], { searchInput, columnKeys }: TableState): ExampleItem[] {
    const searchText = searchInput?.text || '';
    const keysToSearchBy = columnKeys;

    if (searchText.trim() === '' || keysToSearchBy.length === 0) {
      return items;
    }

    return items.filter((item) => {
      const valuesForSearch = keysToSearchBy.map((key) => getNestedValue(key, item));
      return valuesForSearch
        .filter((value) => !!value)
        .map((value): string => value.toString())
        .some((value) => value.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    });
  }
}

function getNestedValue<T extends Record<string, any>>(key: string, object: T): any {
  return key.split('.').reduce((a, b) => (a ? a[b] : null), object);
}

// Example items
const ITEMS: ExampleItem[] = [
  {
    id: 1,
    name: 'Criterio 1',
    description: 'Registro de Compras',
    price: {
      value: 66.04,
      currency: 'CNY',
    },
    status: 'Aceptado',
    statusColor: 'negative',
    date: new FdDate(2020, 1, 7),
    verified: true,
  },
  {
    id: 2,
    name: 'Criterio 2',
    description: 'Registro de ventas',
    price: {
      value: 489.01,
      currency: 'EUR',
    },
    status: 'Pendiente',
    statusColor: 'negative',
    date: new FdDate(2020, 2, 5),
    verified: true,
  },
  {
    id: 1,
    name: 'Criterio 1',
    description: 'Registro de Compras',
    price: {
      value: 66.04,
      currency: 'CNY',
    },
    status: 'Aceptado',
    statusColor: 'negative',
    date: new FdDate(2020, 1, 7),
    verified: true,
  },
  {
    id: 2,
    name: 'Criterio 2',
    description: 'Registro de ventas',
    price: {
      value: 489.01,
      currency: 'EUR',
    },
    status: 'Pendiente',
    statusColor: 'negative',
    date: new FdDate(2020, 2, 5),
    verified: true,
  },
  {
    id: 1,
    name: 'Criterio 1',
    description: 'Registro de Compras',
    price: {
      value: 66.04,
      currency: 'CNY',
    },
    status: 'Aceptado',
    statusColor: 'negative',
    date: new FdDate(2020, 1, 7),
    verified: true,
  },
  {
    id: 2,
    name: 'Criterio 2',
    description: 'Registro de ventas',
    price: {
      value: 489.01,
      currency: 'EUR',
    },
    status: 'Pendiente',
    statusColor: 'negative',
    date: new FdDate(2020, 2, 5),
    verified: true,
  },
  {
    id: 1,
    name: 'Criterio 1',
    description: 'Registro de Compras',
    price: {
      value: 66.04,
      currency: 'CNY',
    },
    status: 'Aceptado',
    statusColor: 'negative',
    date: new FdDate(2020, 1, 7),
    verified: true,
  },
  {
    id: 2,
    name: 'Criterio 2',
    description: 'Registro de ventas',
    price: {
      value: 489.01,
      currency: 'EUR',
    },
    status: 'Pendiente',
    statusColor: 'negative',
    date: new FdDate(2020, 2, 5),
    verified: true,
  },
  {
    id: 1,
    name: 'Criterio 1',
    description: 'Registro de Compras',
    price: {
      value: 66.04,
      currency: 'CNY',
    },
    status: 'Aceptado',
    statusColor: 'negative',
    date: new FdDate(2020, 1, 7),
    verified: true,
  },
  {
    id: 2,
    name: 'Criterio 2',
    description: 'Registro de ventas',
    price: {
      value: 489.01,
      currency: 'EUR',
    },
    status: 'Pendiente',
    statusColor: 'negative',
    date: new FdDate(2020, 2, 5),
    verified: true,
  },
  {
    id: 1,
    name: 'Criterio 1',
    description: 'Registro de Compras',
    price: {
      value: 66.04,
      currency: 'CNY',
    },
    status: 'Aceptado',
    statusColor: 'negative',
    date: new FdDate(2020, 1, 7),
    verified: true,
  },
  {
    id: 2,
    name: 'Criterio 2',
    description: 'Registro de ventas',
    price: {
      value: 489.01,
      currency: 'EUR',
    },
    status: 'Pendiente',
    statusColor: 'negative',
    date: new FdDate(2020, 2, 5),
    verified: true,
  },
];
