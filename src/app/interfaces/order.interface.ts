export interface InternalOrder {
  id: number;
  customer: string;
  created: Date;
  revenue: number;
  cost: number;
  price: number;
  fulfillment: string;
}

interface SelectedVariant {
  material: string;
  price: number;
}

interface Order {
  name: string;
  sku: string;
  selectedVariant: SelectedVariant;
}

export interface ExternalOrder {
  id: number;
  customer: string;
  order: Order[];
  amount: number;
  volume: number;
  sku: string;
}
