import {IUserRepository} from "../../interfaces/userInterfaces";
import {IOrderRepository} from "../../interfaces/orderInterfaces";
import {OrderEntity} from "../../core/entities/orderEntities/OrderEntity";

export class CustomerService {

  constructor(
    private readonly userRepository: IUserRepository,
    private readonly orderRepository: IOrderRepository,
  ) {
  }

  async getCustomerOrders(customerId: number): Promise<OrderEntity[]> {
    const userExists = await this.userRepository.fetchById(customerId);

    if (!userExists) throw new Error("User not found");

    return this.orderRepository.fetchByCustomer(customerId);
  }
}
