import {OrderStatusEntity} from "../core/entities/orderEntities/OrderStatusEntity";
import {OrderEntity} from "../core/entities/orderEntities/OrderEntity";
import {OrderItemEntity} from "../core/entities/orderEntities/OrderItemEntity";

export interface IOrderRepository {
  save(status: OrderEntity): Promise<OrderEntity>;
  fetchById(id: number): Promise<OrderEntity | undefined>;
}

export interface IOrderStatusRepository {
  save(status: OrderStatusEntity): Promise<OrderStatusEntity>;
  fetchById(id: number): Promise<OrderStatusEntity | undefined>;
}

export interface IOrderItemRepository {
  save(status: OrderItemEntity): Promise<OrderItemEntity>;
  fetchById(id: number): Promise<OrderItemEntity | undefined>;
}
