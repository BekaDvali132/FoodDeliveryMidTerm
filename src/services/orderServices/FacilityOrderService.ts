import {IOrderRepository} from "../../interfaces/orderInterfaces";
import {OrderEntity, orderStatusEnum} from "../../core/entities/orderEntities/OrderEntity";
import { FacilityEntity } from "../../core/entities/facilityEntities/FacilityEntity";

export class FacilityOrderService {

    constructor(
        private readonly orderRepository: IOrderRepository,
    ) {}

    async getOrdersByFacility(facility: FacilityEntity): Promise<OrderEntity[]> {
        return this.orderRepository.fetchByFacility(facility.id)
    }

    async facilityConfirmOrder(facility: FacilityEntity, order: OrderEntity): Promise<OrderEntity> {
        const orderExists = await this.orderRepository.fetchById(order.id);

        if (!orderExists) {
            throw new Error("Order not found");
        }

        if (orderExists.facility?.id !== facility.id) {
            throw new Error("Order does not belong to this facility");
        }

        orderExists.status = orderStatusEnum.preparing;

        return this.orderRepository.save(orderExists);
    }

    async facilityFinishPreparingOrder(facility: FacilityEntity, order: OrderEntity): Promise<OrderEntity> {
        const orderExists = await this.orderRepository.fetchById(order.id);

        if (!orderExists) {
            throw new Error("Order not found");
        }

        if (orderExists.facility?.id !== facility.id) {
            throw new Error("Order does not belong to this facility");
        }

        orderExists.status = orderStatusEnum.prepared;

        return this.orderRepository.save(orderExists);
    }

}
