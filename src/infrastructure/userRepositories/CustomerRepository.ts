import {ICustomerRepository} from "../../interfaces/userInterfaces";
import { DataSource } from "../Database";
import {CustomerEntity} from "../../core/entities/userEntities/CustomerEntity";

export class CustomerRepository implements ICustomerRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  async save(userId: number, user: CustomerEntity): Promise<CustomerEntity> {
    const coreUser = await this.dataSource.users.getById(userId);

    if (!coreUser) {
      throw new Error('User not found');
    }

    const customer = await this.dataSource.customers.save(user);

    await this.dataSource.users.update({
      ...coreUser,
      customer
    })

    return customer;
  }

  fetchById(id: number): Promise<CustomerEntity | undefined> {
    return this.dataSource.customers.getById(id);
  }
}
