export default interface Order {
  id: number;
  customer: string;
  created: Date;
  revenue: number;
  cost: number;
  price: number;
  fulfillment: string;
}
