import { CourierEntity } from './CourierEntity';
import { FacilityManagerEntity } from './FacilityManagerEntity';

export class UserEntity {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public courier: CourierEntity,
    public manager: FacilityManagerEntity  
  ){}
}