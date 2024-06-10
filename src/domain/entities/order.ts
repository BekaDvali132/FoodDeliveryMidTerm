export interface Order {
    id: number;
    details: string;
    status: 'waiting' | 'received' | 'delivering' | 'delivered';
    deliveryDetails: string;
}
  