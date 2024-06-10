import { Order } from './order';

export interface Courier {
  id: number;
  name: string;
  currentOrders: Order[];
  getOrders(): Order[];
  acceptOrder(orderId: number): void;
  getOrderDeliveryDetails(orderId: number): string;
  changeOrderStatus(orderId: number, status: 'waiting' | 'received' | 'delivering' | 'delivered'): void;
}