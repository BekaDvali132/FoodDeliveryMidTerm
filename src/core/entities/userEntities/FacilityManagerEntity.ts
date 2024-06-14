import { FacilityEntity } from '../facilityEntities/FacilityEntity';

export class FacilityManagerEntity {
  constructor(
    public id: number,
    public facilities: FacilityEntity[]
  ){}
}