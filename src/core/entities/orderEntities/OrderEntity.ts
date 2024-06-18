export enum orderStatusEnum {
  pending = 'pending',
  delivering = 'delivering',
  preparing = 'preparing',
  completed = 'completed',
  cancelled = 'cancelled',
}

export class OrderEntity {
  public id: number = 0;
  public paymentAmount: number = 0;

  public status: orderStatusEnum = orderStatusEnum.pending

  constructor(rawData?: Partial<OrderEntity>) {
    Object.assign(this, rawData);
  }
}
