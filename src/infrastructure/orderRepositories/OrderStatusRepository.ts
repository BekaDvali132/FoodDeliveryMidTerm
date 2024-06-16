import { DataSource } from "../Database";
import {OrderStatusEntity} from "../../core/entities/orderEntities/OrderStatusEntity";
import {IOrderStatusRepository} from "../../interfaces/orderInterfaces";

export class OrderStatusRepository implements IOrderStatusRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  async save(status: OrderStatusEntity): Promise<OrderStatusEntity> {
    const statusExists = await this.dataSource.orderStatuses
      .findOne(
        (item) => item.name === status.name
      );

    if (statusExists) {
      throw new Error('Order status already exists');
    }

    return this.dataSource.orderStatuses.save(status);
  }

  fetchById(id: number): Promise<OrderStatusEntity | undefined> {
    return this.dataSource.orderStatuses.getById(id);
  }
}
