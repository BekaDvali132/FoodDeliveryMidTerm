import { FacilityType } from './FacilityType';
import { FacilityManagerEntity } from '../userEntities/FacilityManagerEntity';

export class FacilityEntity {
  public id: number = 0;
  public name: string = '';

  public type?: FacilityType;
  public manager?: FacilityManagerEntity;

  constructor(rawData?: Partial<FacilityEntity>) {
    if (rawData?.type) {
      this.type = new FacilityType(rawData.type);
      delete rawData.type;
    }

    if (rawData?.manager) {
      this.manager = new FacilityManagerEntity(rawData.manager);
      delete rawData.manager;
    }

    Object.assign(this, rawData);
  }
}

