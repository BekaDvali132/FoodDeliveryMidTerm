import { UserEntity } from "../core/entities/userEntities/UserEntity";
import {CustomerEntity} from "../core/entities/userEntities/CustomerEntity";
import {AdminEntity} from "../core/entities/userEntities/AdminEntity";
import {CourierEntity} from "../core/entities/userEntities/CourierEntity";
import {FacilityManagerEntity} from "../core/entities/userEntities/FacilityManagerEntity";
import { FacilityEntity } from "../core/entities/facilityEntities/FacilityEntity";
import { FacilityType } from "../core/entities/facilityEntities/FacilityType";
import { ProductEntity } from "../core/entities/facilityEntities/ProductEntity";
import { Tag } from "../core/entities/facilityEntities/Tag";


export interface IUserRepository {
  save(user: UserEntity): Promise<UserEntity>;
  fetchById(id: number): Promise<UserEntity | undefined>;
  fetchByEmail(email: string): Promise<UserEntity | undefined>;
  update(user: UserEntity): Promise<UserEntity>;
}

export interface ICustomerRepository {
  save(userId: number, user: CustomerEntity): Promise<CustomerEntity>;
  fetchById(id: number): Promise<CustomerEntity | undefined>;
}

export interface IAdminRepository {
  save(userId: number, user: AdminEntity): Promise<AdminEntity>;
  fetchById(id: number): Promise<AdminEntity | undefined>;
}

export interface ICourierRepository {
  save(userId: number, user: CourierEntity): Promise<CourierEntity>;
  fetchById(id: number): Promise<CourierEntity | undefined>;
}

export interface IFacilityManagerRepository {
  save(userId: number, user: FacilityManagerEntity): Promise<FacilityManagerEntity>;
  fetchById(id: number): Promise<FacilityManagerEntity | undefined>;
}

export interface IFacilityRepository {
  save(facility: FacilityEntity): Promise<FacilityEntity>;
  fetchById(id: number): Promise<FacilityEntity | undefined>;
  update(facility: FacilityEntity): Promise<FacilityEntity>;
}

export interface IFacilityTypeRepository {
  save(facilityType: FacilityType): Promise<FacilityType>;
  fetchById(id: number): Promise<FacilityType | undefined>;
  update(facilityType: FacilityType): Promise<FacilityType>;
}

export interface IProductRepository {
  save(product: ProductEntity): Promise<ProductEntity>;
  fetchById(id: number): Promise<ProductEntity | undefined>;
  update(product: ProductEntity): Promise<ProductEntity>;
}

export interface ITagRepository {
  save(tag: Tag): Promise<Tag>;
  fetchById(id: number): Promise<Tag | undefined>;
  update(tag: Tag): Promise<Tag>;
}