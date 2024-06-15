import { UserEntity } from "../core/entities/userEntities/UserEntity";
import {CustomerEntity} from "../core/entities/userEntities/CustomerEntity";
import {AdminEntity} from "../core/entities/userEntities/AdminEntity";

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
