import { OrderEntity } from '../orderEntities/OrderEntity';

export class CourierEntity {
  constructor(
    public id: number,
    public orders: OrderEntity[]
  ){}
}