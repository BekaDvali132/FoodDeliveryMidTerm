import { ProductEntity } from './ProductEntity';
import { FacilityType } from './FacilityType';
import { FacilityManagerEntity } from '../userEntities/FacilityManagerEntity';

export class FacilityEntity {
  readonly id: number;
  public type: FacilityType;
  public manager: FacilityManagerEntity;

  constructor(
      id: number,
      type: FacilityType,
      manager: FacilityManagerEntity,
  ) {
      this.id = id;
      this.type = type;
      this.manager = manager;
 
  }

  
}
