import { FacilityType } from './FacilityType';
import { FacilityManagerEntity } from '../userEntities/FacilityManagerEntity';

export class FacilityEntity {
  constructor(
      public id: number,
      public type: FacilityType,
      public manager: FacilityManagerEntity,
  ) {}
}
