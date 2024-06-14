import { CourierEntity } from './CourierEntity';
import { FacilityManagerEntity } from './FacilityManagerEntity';
import {CustomerEntity} from "./CustomerEntity";
import {AdminEntity} from "./AdminEntity";

export class UserEntity {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public courier: CourierEntity,
    public manager: FacilityManagerEntity,
    public customer: CustomerEntity,
    public admin: AdminEntity
  ){}
}
