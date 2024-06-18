import {FacilityRepository} from "../../infrastructure/facilityRepositories/FacilityRepository";
import {FacilityEntity} from "../../core/entities/facilityEntities/FacilityEntity";
import {FacilityManagerEntity} from "../../core/entities/userEntities/FacilityManagerEntity";
import {FacilityManagerRepository} from "../../infrastructure/userRepositories/FacilityManagerRepository";
import {FacilityTypeRepository} from "../../infrastructure/facilityRepositories/FacilityTypeRepository";
import {FacilityType} from "../../core/entities/facilityEntities/FacilityType";

export class FacilityService {

  constructor(
    private readonly facilityManagerRepository: FacilityManagerRepository,
    private readonly facilityRepository: FacilityRepository,
    private readonly facilityTypeRepository: FacilityTypeRepository,
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
