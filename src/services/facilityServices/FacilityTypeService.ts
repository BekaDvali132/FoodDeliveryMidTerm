import {FacilityType} from "../../core/entities/facilityEntities/FacilityType";
import {IFacilityTypeRepository} from "../../interfaces/facilityInterfaces";

export class FacilityTypeService {

  constructor(
    private readonly facilityTypeRepository: IFacilityTypeRepository,
  ) {}

  async addFacilityType(name: string): Promise<FacilityType> {
    const newType = new FacilityType({name});
    return this.facilityTypeRepository.save(newType);
  }

}
