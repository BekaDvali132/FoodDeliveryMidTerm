export class CustomerEntity {

  public id: number = 0;

  constructor(rawData?: Partial<CustomerEntity>) {
    Object.assign(this, rawData);
  }
}
