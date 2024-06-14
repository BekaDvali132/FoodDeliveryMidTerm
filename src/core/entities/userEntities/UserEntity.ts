import { CourierEntity } from './CourierEntity';
import { FacilityManagerEntity } from './FacilityManagerEntity';
import { CustomerEntity } from "./CustomerEntity";
import { AdminEntity } from "./AdminEntity";

export class UserEntity {

  public id: number = 0;

  public email: string = "";
  public password: string = "";

  public firstName: string = "";
  public lastName: string = "";

  public courier?: CourierEntity;
  public manager?: FacilityManagerEntity;
  public customer?: CustomerEntity;
  public admin?: AdminEntity;

  constructor(rawData?: Partial<UserEntity>) {
    if (rawData?.admin) {
      this.admin = new AdminEntity(rawData.admin);
      delete rawData.admin;
    }

    if (rawData?.courier) {
      this.courier = new CourierEntity(rawData.courier);
      delete rawData.courier;
    }

    if (rawData?.manager) {
      this.manager = new FacilityManagerEntity(rawData.manager);
      delete rawData.manager;
    }

    if (rawData?.customer) {
      this.customer = new CustomerEntity(rawData.customer);
      delete rawData.customer;
    }

    Object.assign(this, rawData);
  }
}
