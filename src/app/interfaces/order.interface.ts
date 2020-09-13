export interface InternalOrder {
  id: number;
  customer: string;
  created: Date;
  revenue: number;
  cost: number;
  price: number;
  fulfillment: string;
  name?: string;
  selectedVariants?: SingleOrderVariant[];
}

export interface SingleOrderVariant {
  material: string;
  price: number;
}

export interface SingleOrder {
  id: number;
  name: string;
  sku: string;
  variants: SingleOrderVariant[];
  selectedVariants: SingleOrderVariant[];
}

export interface ExternalOrder {
  id: number;
  customer: string;
  order: SingleOrder[];
  amount: number;
  volume: number;
  sku: string;
}
