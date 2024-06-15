export class OrderStatusEntity {
  public id: number = 0;
  public name: string = "";

  constructor(rawData?: Partial<OrderStatusEntity>) {
    Object.assign(this, rawData);
  }
}
