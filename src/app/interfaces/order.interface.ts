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

export interface SingleOrder {
  id: number;
  name: string;
  sku: string;
  selectedVariant: SelectedVariant;
}

export interface ExternalOrder {
  id: number;
  customer: string;
  order: SingleOrder[];
  amount: number;
  volume: number;
  sku: string;
}
