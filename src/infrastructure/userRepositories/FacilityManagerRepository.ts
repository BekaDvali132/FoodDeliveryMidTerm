import {IFacilityManagerRepository} from "../../interfaces";
import { DataSource } from "../Database";
import {FacilityManagerEntity} from "../../core/entities/userEntities/FacilityManagerEntity";

export class FacilityManagerRepository implements IFacilityManagerRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  save(user: FacilityManagerEntity): Promise<FacilityManagerEntity> {
    return this.dataSource.facilityManagers.save(user);
  }

  fetchById(id: number): Promise<FacilityManagerEntity | undefined> {
    return this.dataSource.facilityManagers.getById(id);
  }
}
