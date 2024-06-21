export enum userRoles {
  customer = "customer",
  courier = "courier",
  manager = "manager",
  admin = "admin",
}

export class UserEntity {

  public id: number = 0;

  public email: string = "";
  public password: string = "";

  public firstName: string = "";
  public lastName: string = "";

  public roles: userRoles[] = [];

  constructor(rawData?: Partial<UserEntity>) {
    Object.assign(this, rawData);
  }
}
