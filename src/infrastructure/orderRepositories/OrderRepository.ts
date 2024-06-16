import { DataSource } from "../Database";
import {IOrderRepository} from "../../interfaces/orderInterfaces";
import {OrderEntity} from "../../core/entities/orderEntities/OrderEntity";

export class OrderRepository implements IOrderRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  async save(order: OrderEntity): Promise<OrderEntity> {
    return this.dataSource.orders.save(order);
  }

  fetchById(id: number): Promise<OrderEntity | undefined> {
    return this.dataSource.orders.getById(id);
  }

  async update(order: OrderEntity): Promise<OrderEntity> {
    return this.dataSource.orders.update(order);
  }
}
