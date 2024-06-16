import { CustomerEntity } from "../core/entities/userEntities/CustomerEntity";
import { UserEntity } from "../core/entities/userEntities/UserEntity";
import { IUserRepository } from "../interfaces/userInterfaces";

export class CustomerService {

  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  async register(email: string, password: string, firstName: string, lastName: string): Promise<CustomerEntity> {
    const user = new UserEntity({ email, password, firstName, lastName });
    return this.userRepository.save(user);
  }
}
