import {FacilityEntity} from "../../core/entities/facilityEntities/FacilityEntity";
import {FacilityManagerEntity} from "../../core/entities/userEntities/FacilityManagerEntity";
import {FacilityType} from "../../core/entities/facilityEntities/FacilityType";
import {IFacilityManagerRepository} from "../../interfaces/userInterfaces";
import {IFacilityRepository, IFacilityTypeRepository} from "../../interfaces/facilityInterfaces";

export class FacilityService {

  constructor(
    private readonly facilityManagerRepository: IFacilityManagerRepository,
    private readonly facilityRepository: IFacilityRepository,
    private readonly facilityTypeRepository: IFacilityTypeRepository,
  ) {}

  async getFacilities(): Promise<FacilityEntity[]> {
    return this.facilityRepository.fetchAll();
  }

  async addFacility(name: string, ownerId: number, typeId: number): Promise<FacilityEntity> {
    const manager = await this.facilityManagerRepository.fetchById(ownerId) as FacilityManagerEntity;

    if (!manager) {
      throw new Error("Owner not found");
    }

    const type = await this.facilityTypeRepository.fetchById(typeId) as FacilityType;

    if (!type) {
      throw new Error("Type not found");
    }

    const facility = new FacilityEntity({ name, manager, type });

    return this.facilityRepository.save(facility);
  }

}
