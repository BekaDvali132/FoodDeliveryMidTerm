import { UserEntity } from "../core/entities/userEntities/UserEntity";
import {OrderEntity} from "../core/entities/orderEntities/OrderEntity";
import {OrderItemEntity} from "../core/entities/orderEntities/OrderItemEntity";
import {FacilityEntity} from "../core/entities/facilityEntities/FacilityEntity";
import {FacilityType} from "../core/entities/facilityEntities/FacilityType";
import {Tag} from "../core/entities/facilityEntities/Tag";
import {ProductEntity} from "../core/entities/facilityEntities/ProductEntity";

export class Collection<T> {

  private items: T[] = [];
  private lastId = 1;

  save(item: T): Promise<T> {
    const id = (item as any).id;

    if (!id) {
      (item as any).id = this.lastId++;
      this.items.push(item);
    }

    const index = this.items.findIndex((item: any) => item.id === id);

    if (index >= 0) {
      this.items[index] = item;
    } else {
      this.items.push(item);
    }

    return Promise.resolve(item);
  }

  update(item: T): Promise<T> {
    const id = (item as any).id;

    if (!id) {
      throw new Error('Cannot update item without id');
    }

    const index = this.items.findIndex((item: any) => item.id === id);

    if (index >= 0) {
      this.items[index] = item;
    } else {
      throw new Error('Item not found');
    }

    return Promise.resolve(item);
  }

  getById(id: number): Promise<T | undefined> {
    return Promise.resolve(
      this.items.find((item: any) => item.id === id)
    );
  }

  find(predicate?: (item: T) => boolean): Promise<T[]> {
    return Promise.resolve(
      this.items.filter(predicate ? predicate : () => true)
    );
  }

  findOne(predicate: (item: T) => boolean): Promise<T | undefined> {
    return Promise.resolve(
      this.items.find(predicate)
    );
  }

  delete(id: number): Promise<void> {
    const index = this.items.findIndex((item: any) => item.id === id);

    if (index >= 0) {
      this.items.splice(index, 1);
    }

    return Promise.resolve();
  }
}

export class DataSource {
  public readonly users = new Collection<UserEntity>;
  public readonly orders = new Collection<OrderEntity>;
  public readonly orderItems = new Collection<OrderItemEntity>;
  public readonly facilities = new Collection<FacilityEntity>;
  public readonly facilityTypes = new Collection<FacilityType>;
  public readonly tags = new Collection<Tag>;
  public readonly products = new Collection<ProductEntity>;

  private static _instance: DataSource;

  static get instance() {
    if (!DataSource._instance) {
      DataSource._instance = new DataSource();
    }

    return DataSource._instance;
  }
}
