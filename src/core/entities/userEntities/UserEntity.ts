import { CourierEntity } from './CourierEntity';

export class UserEntity {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public courier: CourierEntity  
  ){}
}