import { OrderEntity } from '../orderEntities/OrderEntity';

export class CustomerEntity {
  constructor(
    public id: number,
    public orders: OrderEntity[]
  ){}
}
