import {ICourierRepository} from "../../interfaces";
import { DataSource } from "../Database";
import {CourierEntity} from "../../core/entities/userEntities/CourierEntity";

export class CourierRepository implements ICourierRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  save(user: CourierEntity): Promise<CourierEntity> {
    return this.dataSource.couriers.save(user);
  }

  fetchById(id: number): Promise<CourierEntity | undefined> {
    return this.dataSource.couriers.getById(id);
  }
}
