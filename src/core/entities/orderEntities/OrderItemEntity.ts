import { OrderEntity } from "./OrderEntity";

export class OrderItemEntity {
    constructor(
        public id: number,
        public order: OrderEntity,
        public product: string,
        public amount: number
    ){}
}
