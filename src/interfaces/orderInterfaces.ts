import {OrderEntity} from "../core/entities/orderEntities/OrderEntity";
import {OrderItemEntity} from "../core/entities/orderEntities/OrderItemEntity";

export interface IOrderRepository {
  save(status: OrderEntity): Promise<OrderEntity>;
  fetchById(id: number): Promise<OrderEntity | undefined>;
  update(orderItem: OrderEntity): Promise<OrderEntity>;
  fetchByCustomer(id: number): Promise<OrderEntity[]>;
  fetchByFacility(id: number): Promise<OrderEntity[]>;
}

export interface IOrderItemRepository {
  save(status: OrderItemEntity): Promise<OrderItemEntity>;
  fetchById(id: number): Promise<OrderItemEntity | undefined>;
}
