import {IOrderRepository} from "../../interfaces/orderInterfaces";
import {OrderEntity, orderStatusEnum} from "../../core/entities/orderEntities/OrderEntity";
import { FacilityEntity } from "../../core/entities/facilityEntities/FacilityEntity";
import { UserEntity } from "../../core/entities/userEntities/UserEntity";

export class CourierOrderService {

    constructor(
        private readonly orderRepository: IOrderRepository,
    ) {}

    async getOrdersByFacility(facility: FacilityEntity): Promise<OrderEntity[]> {
        return this.orderRepository.fetchByFacility(facility.id)
    }

    async acceptOrderDelivery(courier: UserEntity, order: OrderEntity): Promise<OrderEntity> {
        const orderExists = await this.orderRepository.fetchById(order.id);

        if (!orderExists) {
            throw new Error("Order not found");
        }

        if (orderExists.courier?.id) {
            throw new Error("Order already has a courier");
        }

        if (courier?.roles?.find((role) => role === 'courier')) {
            throw new Error("User is not a courier");
        }

        orderExists.status = orderStatusEnum.delivering;

        orderExists.courier = courier;

        return this.orderRepository.save(orderExists);
    }

    async deliverOrder(courier: UserEntity, order: OrderEntity): Promise<OrderEntity> {
        const orderExists = await this.orderRepository.fetchById(order.id);

        if (!orderExists) {
            throw new Error("Order not found");
        }

        if (orderExists.courier?.id !== courier.id) {
            throw new Error("Order does not belong to this courier");
        }

        orderExists.status = orderStatusEnum.completed;

        return this.orderRepository.save(orderExists);
    }

}
