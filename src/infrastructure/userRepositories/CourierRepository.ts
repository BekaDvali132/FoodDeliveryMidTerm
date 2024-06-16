import {ICourierRepository} from "../../interfaces/userInterfaces";
import { DataSource } from "../Database";
import {CourierEntity} from "../../core/entities/userEntities/CourierEntity";

export class CourierRepository implements ICourierRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  async save(userId: number, user: CourierEntity): Promise<CourierEntity> {
    const coreUser = await this.dataSource.users.getById(userId);

    if (!coreUser) {
      throw new Error('User not found');
    }

    const courier = await this.dataSource.couriers.save(user);

    await this.dataSource.users.update({
      ...coreUser,
      courier
    });

    return courier;
  }

  fetchById(id: number): Promise<CourierEntity | undefined> {
    return this.dataSource.couriers.getById(id);
  }
}
