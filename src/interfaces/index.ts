import { UserEntity } from "../core/entities/userEntities/UserEntity";
import {CustomerEntity} from "../core/entities/userEntities/CustomerEntity";
import {AdminEntity} from "../core/entities/userEntities/AdminEntity";
import {CourierEntity} from "../core/entities/userEntities/CourierEntity";
import {FacilityManagerEntity} from "../core/entities/userEntities/FacilityManagerEntity";

export interface IUserRepository {
  save(user: UserEntity): Promise<UserEntity>;
  fetchById(id: number): Promise<UserEntity | undefined>;
  fetchByEmail(email: string): Promise<UserEntity | undefined>;
}

export interface ICustomerRepository {
  save(user: CustomerEntity): Promise<CustomerEntity>;
  fetchById(id: number): Promise<CustomerEntity | undefined>;
}

export interface IAdminRepository {
  save(user: AdminEntity): Promise<AdminEntity>;
  fetchById(id: number): Promise<AdminEntity | undefined>;
}

export interface ICourierRepository {
  save(user: CourierEntity): Promise<CourierEntity>;
  fetchById(id: number): Promise<CourierEntity | undefined>;
}

export interface IFacilityManagerRepository {
  save(user: FacilityManagerEntity): Promise<FacilityManagerEntity>;
  fetchById(id: number): Promise<FacilityManagerEntity | undefined>;
}
