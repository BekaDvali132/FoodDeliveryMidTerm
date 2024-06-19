import {FacilityEntity} from "../../core/entities/facilityEntities/FacilityEntity";
import {FacilityType} from "../../core/entities/facilityEntities/FacilityType";
import {IUserRepository} from "../../interfaces/userInterfaces";
import {IFacilityRepository, IFacilityTypeRepository} from "../../interfaces/facilityInterfaces";
import {UserEntity} from "../../core/entities/userEntities/UserEntity";

export class FacilityService {

  constructor(
    private readonly userRepository: IUserRepository,
    private readonly facilityRepository: IFacilityRepository,
    private readonly facilityTypeRepository: IFacilityTypeRepository,
  ) {}

  async getFacilities(): Promise<FacilityEntity[]> {
    return this.facilityRepository.fetchAll();
  }

  async addFacility(name: string, ownerId: number, typeId: number): Promise<FacilityEntity> {
    const manager = await this.userRepository.fetchById(ownerId) as UserEntity;

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
