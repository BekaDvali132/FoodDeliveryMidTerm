import { OrderEntity } from "./OrderEntity";
import {ProductEntity} from "../facilityEntities/ProductEntity";
export class OrderItemEntity {
    public id: number = 0;
    public quantity: number = 0;

    public product?: ProductEntity;
    public order?: OrderEntity;

    constructor(
        rawData?: Partial<OrderItemEntity>
    ){
        if (rawData?.order){
            this.order = new OrderEntity(rawData.order);
            delete rawData.order;
        }

        if (rawData?.product){
            this.product = new ProductEntity(rawData.product);
            delete rawData.product;
        }
        Object.assign(this, rawData);
    }
}
