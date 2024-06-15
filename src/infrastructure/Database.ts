import { UserEntity } from "../core/entities/userEntities/UserEntity";
import {CustomerEntity} from "../core/entities/userEntities/CustomerEntity";
import {AdminEntity} from "../core/entities/userEntities/AdminEntity";
import {CourierEntity} from "../core/entities/userEntities/CourierEntity";
import {FacilityManagerEntity} from "../core/entities/userEntities/FacilityManagerEntity";

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

  find(predicate: (item: T) => boolean): Promise<T[]> {
    return Promise.resolve(
      this.items.filter(predicate)
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
  public readonly customers = new Collection<CustomerEntity>;
  public readonly admins = new Collection<AdminEntity>;
  public readonly couriers = new Collection<CourierEntity>;
  public readonly facilityManagers = new Collection<FacilityManagerEntity>;

  private static _instance: DataSource;

  static get instance() {
    if (!DataSource._instance) {
      DataSource._instance = new DataSource();
    }

    return DataSource._instance;
  }
}
