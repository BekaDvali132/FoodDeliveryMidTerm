import { FacilityType } from './FacilityType';
import {UserEntity} from "../userEntities/UserEntity";

export class FacilityEntity {
  public id: number = 0;
  public name: string = '';

  public type?: FacilityType;
  public manager?: UserEntity;

  constructor(rawData?: Partial<FacilityEntity>) {
    if (rawData?.type) {
      this.type = new FacilityType(rawData.type);
      delete rawData.type;
    }

    if (rawData?.manager) {
      this.manager = new UserEntity(rawData.manager);
      delete rawData.manager;
    }

    Object.assign(this, rawData);
  }
}

