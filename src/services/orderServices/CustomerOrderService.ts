import {IOrderItemRepository, IOrderRepository} from "../../interfaces/orderInterfaces";
import {UserEntity} from "../../core/entities/userEntities/UserEntity";
import {OrderItemEntity} from "../../core/entities/orderEntities/OrderItemEntity";
import {OrderEntity, orderStatusEnum} from "../../core/entities/orderEntities/OrderEntity";
import {ProductEntity} from "../../core/entities/facilityEntities/ProductEntity";
import { FacilityEntity } from "../../core/entities/facilityEntities/FacilityEntity";

export class CustomerOrderService {
    constructor(
        private readonly orderRepository: IOrderRepository,
        private readonly orderItemRepository: IOrderItemRepository,
    ) {}

    async placeOrder({
        customer,
        products,
        facility
    }: {
        customer: UserEntity,
        products: ProductEntity[],
        facility: FacilityEntity
    }): Promise<OrderEntity> {
        const paymentAmount = products.reduce((acc, item) => acc + (item?.price || 0), 0)

        let newOrder = new OrderEntity({
            customer,
            paymentAmount,
            status: orderStatusEnum.pending,
            facility
        });

        newOrder = await this.orderRepository.save(newOrder)

        let orderItems: OrderItemEntity[] = [];

        products.forEach((product) => {
            const orderItemExists = orderItems.find((item) => item.product?.id === product.id);

            if (orderItemExists) {
                orderItemExists.quantity += 1;
                return;
            }

            const orderItem = new OrderItemEntity({
                product,
                quantity: 1
            });
            orderItems.push(orderItem)
        })


        const savedOrderItems = orderItems.map(async (item) => {
            item.order = newOrder;
            return await this.orderItemRepository.save(item)
        })

        await Promise.all(savedOrderItems)

        return newOrder;
    }

}
