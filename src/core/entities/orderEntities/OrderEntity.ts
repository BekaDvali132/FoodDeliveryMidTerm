import { OrderStatusEntity } from "./OrderStatusEntity";

export class OrderEntity {
    constructor(
        public id: number,
        public status: OrderStatusEntity,
        public paymentAmount: number
    ){}
}
  