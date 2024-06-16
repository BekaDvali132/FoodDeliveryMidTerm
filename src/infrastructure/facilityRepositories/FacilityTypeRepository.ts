import {IFacilityTypeRepository} from "../../interfaces/facilityInterfaces";
import {DataSource} from "../Database";
import {FacilityType} from "../../core/entities/facilityEntities/FacilityType";

export class FacilityTypeRepository implements IFacilityTypeRepository {
  constructor(
    private readonly dataSource: DataSource,
  ) {
  }

  async save(type: FacilityType): Promise<FacilityType> {
    const typeNameExists = await this.dataSource.facilityTypes.findOne(
      (item) => item.name === type.name
    );

    if (typeNameExists) {
      throw new Error("Facility type name already exists");
    }

    return this.dataSource.facilityTypes.save(type);
  }

  fetchById(id: number): Promise<FacilityType | undefined> {
    return this.dataSource.facilityTypes.getById(id);
  }

  async update(type: FacilityType): Promise<FacilityType> {
    return this.dataSource.facilityTypes.update(type);
  }
}
