import {FacilityEntity} from "../core/entities/facilityEntities/FacilityEntity";
import {FacilityType} from "../core/entities/facilityEntities/FacilityType";
import {ProductEntity} from "../core/entities/facilityEntities/ProductEntity";
import {Tag} from "../core/entities/facilityEntities/Tag";

export interface IFacilityRepository {
  save(facility: FacilityEntity): Promise<FacilityEntity>;
  fetchById(id: number): Promise<FacilityEntity | undefined>;
  fetchAll(): Promise<FacilityEntity[]>;
  fetchByManager(managerId: number): Promise<FacilityEntity[]>;
  fetchByType(typeId: number): Promise<FacilityEntity[]>;
}

export interface IFacilityTypeRepository {
  save(facilityType: FacilityType): Promise<FacilityType>;
  fetchById(id: number): Promise<FacilityType | undefined>;
  update(facilityType: FacilityType): Promise<FacilityType>;
  delete(id: number): Promise<void>;
}

export interface IProductRepository {
  save(product: ProductEntity): Promise<ProductEntity>;
  fetchById(id: number): Promise<ProductEntity | undefined>;
  fetchByFacility(facilityId: number): Promise<ProductEntity[]>;
  fetchAllByName(name: string): Promise<ProductEntity[]>;
  fetchByTag(tagId: number): Promise<ProductEntity[]>;
}

export interface ITagRepository {
  save(tag: Tag): Promise<Tag>;
  fetchById(id: number): Promise<Tag | undefined>;
  update(tag: Tag): Promise<Tag>;
  delete(id: number): Promise<void>;
  fetchAll(): Promise<Tag[]>;
}


export interface IAddProduct {
  name: string, 
  price: number, 
  tagIds: number[], 
  facilityId: number, 
  managerId: number
}

export interface IEditProduct {
  id: number, 
  name: string, 
  price: number, 
  tagIds: number[],
  managerId: number
}