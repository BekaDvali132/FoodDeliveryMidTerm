export class FacilityType {
  public id: number = 0;
  public name: string = '';

  constructor(rawData?: Partial<FacilityType>) {
    Object.assign(this, rawData);
  }
}
