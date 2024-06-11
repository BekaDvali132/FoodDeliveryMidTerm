import { OrderEntity } from "./OrderEntity";
import { OrderStatusEntity } from "./OrderStatusEntity";

export class OrderItemEntity {
    constructor(
        public id: number,
        public order: OrderEntity,
        public product: string,
        public amount: number
    ){}
}
  