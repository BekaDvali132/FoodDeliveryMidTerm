import {FacilityType} from "../../core/entities/facilityEntities/FacilityType";
import {IFacilityRepository, IFacilityTypeRepository} from "../../interfaces/facilityInterfaces";

export class FacilityTypeService {

  constructor(
    private readonly facilityTypeRepository: IFacilityTypeRepository,
    private readonly facilityRepository: IFacilityRepository,
  ) {}

  async addFacilityType(name: string): Promise<FacilityType> {
    const newType = new FacilityType({name});
    return this.facilityTypeRepository.save(newType);
  }

  async editFacilityType(id: number, name: string): Promise<FacilityType> {
    const type = await this.facilityTypeRepository.fetchById(id) as FacilityType;

    if (!type) {
      throw new Error("Type not found");
    }

    type.name = name;

    return this.facilityTypeRepository.save(type);
  }

  async deleteFacilityType(id: number): Promise<void> {
    const typeFacilities = await this.facilityRepository.fetchByType(id);

    if (typeFacilities.length) {
      throw new Error("Facility type is in use");
    }

    return this.facilityTypeRepository.delete(id);
  }
}
