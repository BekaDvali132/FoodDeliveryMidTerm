import {UserEntity} from "../userEntities/UserEntity";

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

  public customer?: UserEntity;

  constructor(rawData?: Partial<OrderEntity>) {

    if (rawData?.customer) {
      this.customer = new UserEntity(rawData.customer);
      delete rawData.customer;
    }

    Object.assign(this, rawData);
  }
}
