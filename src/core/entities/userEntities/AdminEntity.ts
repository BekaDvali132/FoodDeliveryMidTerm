export class AdminEntity {

  public id: number = 0;

  constructor(rawData?: Partial<AdminEntity>) {
    Object.assign(this, rawData);
  }
}
