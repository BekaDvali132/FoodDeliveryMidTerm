import { DataSource } from "../Database";
import {IOrderItemRepository} from "../../interfaces/orderInterfaces";
import {OrderItemEntity} from "../../core/entities/orderEntities/OrderItemEntity";

export class OrderItemRepository implements IOrderItemRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  async save(orderItem: OrderItemEntity): Promise<OrderItemEntity> {
    return this.dataSource.orderItems.save(orderItem);
  }

  fetchById(id: number): Promise<OrderItemEntity | undefined> {
    return this.dataSource.orderItems.getById(id);
  }
}
