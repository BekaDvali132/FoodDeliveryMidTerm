import {ICustomerRepository} from "../interfaces";
import { DataSource } from "./Database";
import {CustomerEntity} from "../core/entities/userEntities/CustomerEntity";

export class CustomerRepository implements ICustomerRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  save(user: CustomerEntity): Promise<CustomerEntity> {
    return this.dataSource.customers.save(user);
  }

  fetchById(id: number): Promise<CustomerEntity | undefined> {
    return this.dataSource.customers.getById(id);
  }
}
