import {OrderStatusEntity} from "../core/entities/orderEntities/OrderStatusEntity";
import {OrderEntity} from "../core/entities/orderEntities/OrderEntity";

export interface IOrderRepository {
  save(status: OrderEntity): Promise<OrderEntity>;
  fetchById(id: number): Promise<OrderEntity | undefined>;
}
export interface IOrderStatusRepository {
  save(status: OrderStatusEntity): Promise<OrderStatusEntity>;
  fetchById(id: number): Promise<OrderStatusEntity | undefined>;
}
