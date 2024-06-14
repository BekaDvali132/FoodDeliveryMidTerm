export class CourierEntity {

  public id: number = 0;

  constructor(rawData?: Partial<CourierEntity>) {
    Object.assign(this, rawData);
  }
}
