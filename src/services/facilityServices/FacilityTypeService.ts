import {FacilityTypeRepository} from "../../infrastructure/facilityRepositories/FacilityTypeRepository";
import {FacilityType} from "../../core/entities/facilityEntities/FacilityType";

export class FacilityTypeService {

  constructor(
    private readonly facilityTypeRepository: FacilityTypeRepository,
  ) {}

  async addFacilityType(name: string): Promise<FacilityType> {
    const newType = new FacilityType({name});
    return this.facilityTypeRepository.save(newType);
  }

}
