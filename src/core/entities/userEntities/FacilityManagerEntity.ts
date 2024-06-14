export class FacilityManagerEntity {

  public id: number = 0;

  constructor(rawData?: Partial<FacilityManagerEntity>) {
    Object.assign(this, rawData);
  }
}
