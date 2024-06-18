export class OrderEntity {
  public id: number = 0;
  public paymentAmount: number = 0;

  public status: 'pending' | 'delivering' | 'preparing' | 'completed' | 'cancelled' = 'pending'

  constructor(rawData?: Partial<OrderEntity>) {
    Object.assign(this, rawData);
  }
}
