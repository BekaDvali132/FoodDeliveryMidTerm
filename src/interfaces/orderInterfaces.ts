import {OrderStatusEntity} from "../core/entities/orderEntities/OrderStatusEntity";

export interface IOrderStatusRepository {
  save(status: OrderStatusEntity): Promise<OrderStatusEntity>;
  fetchById(id: number): Promise<OrderStatusEntity | undefined>;
}
