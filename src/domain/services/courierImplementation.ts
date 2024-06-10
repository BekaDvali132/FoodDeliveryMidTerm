import { Order } from '../entities/order';
import { Courier } from '../entities/courier';

export class CourierImplementation implements Courier {
  id: number;
  name: string;
  currentOrders: Order[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.currentOrders = [];
  }

  getOrders(): Order[] {
    return this.currentOrders;
  }

  acceptOrder(orderId: number): void {
    const order = this.currentOrders.find(order => order.id === orderId);
    if (order && order.status === 'waiting') {
      order.status = 'received';
    } else {
      console.error(`Order ${orderId} cannot be accepted. Either it doesn't exist or is not in 'waiting' status.`);
    }
  }

  getOrderDeliveryDetails(orderId: number): string {
    const order = this.currentOrders.find(order => order.id === orderId);
    if (order) {
      return order.deliveryDetails;
    } else {
      console.error(`Order ${orderId} not found.`);
      return '';
    }
  }

  changeOrderStatus(orderId: number, status: 'waiting' | 'received' | 'delivering' | 'delivered'): void {
    const order = this.currentOrders.find(order => order.id === orderId);
    if (order) {
      order.status = status;
    } else {
      console.error(`Order ${orderId} not found.`);
    }
  }
}