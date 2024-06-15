import {OrderStatusEntity} from "./OrderStatusEntity";

export class OrderEntity {
  public id: number = 0;
  public paymentAmount: number = 0;

  public status?: OrderStatusEntity;

  constructor(rawData?: Partial<OrderEntity>) {
    if (rawData?.status) {
      this.status = new OrderStatusEntity(rawData.status);
      delete rawData.status;
    }

    Object.assign(this, rawData);
  }
}
