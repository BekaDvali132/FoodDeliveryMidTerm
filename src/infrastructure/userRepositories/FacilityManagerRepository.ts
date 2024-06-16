import {IFacilityManagerRepository} from "../../interfaces/userInterfaces";
import { DataSource } from "../Database";
import {FacilityManagerEntity} from "../../core/entities/userEntities/FacilityManagerEntity";

export class FacilityManagerRepository implements IFacilityManagerRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  async save(userId: number, user: FacilityManagerEntity): Promise<FacilityManagerEntity> {
    const coreUser = await this.dataSource.users.getById(userId);

    if (!coreUser) {
      throw new Error('User not found');
    }

    const facilityManager = await this.dataSource.facilityManagers.save(user);

    await this.dataSource.users.update({
      ...coreUser,
      manager: facilityManager
    });

    return facilityManager;
  }

  fetchById(id: number): Promise<FacilityManagerEntity | undefined> {
    return this.dataSource.facilityManagers.getById(id);
  }
}
