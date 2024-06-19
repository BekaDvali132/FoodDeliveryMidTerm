import {IFacilityRepository} from "../../interfaces/facilityInterfaces";
import {DataSource} from "../Database";
import {FacilityEntity} from "../../core/entities/facilityEntities/FacilityEntity";

export class FacilityRepository implements IFacilityRepository {
  constructor(
    private readonly dataSource: DataSource,
  ) {
  }

  async save(facility: FacilityEntity): Promise<FacilityEntity> {
    const typeExists = await this.dataSource.facilityTypes.findOne(
      (item) => item.id === facility.type?.id
    );

    if (!typeExists) {
      throw new Error("Facility type does not exist");
    }

    const managerExists = await this.dataSource.users.findOne(
      (manager) => manager.id === facility.manager?.id
    )

    if (!managerExists) {
      throw new Error("Facility manager does not exist");
    }

    return this.dataSource.facilities.save(facility);
  }

  fetchById(id: number): Promise<FacilityEntity | undefined> {
    return this.dataSource.facilities.getById(id);
  }

  fetchAll(): Promise<FacilityEntity[]> {
    return this.dataSource.facilities.find();
  }
}
