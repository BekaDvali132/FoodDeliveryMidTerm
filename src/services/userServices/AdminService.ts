import { UserEntity, userRoles } from "../../core/entities/userEntities/UserEntity";
import { IUserRepository } from "../../interfaces/userInterfaces";

export class AdminService {

  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  async getCustomers(): Promise<UserEntity[]> {
    return this.userRepository.fetchByRole(userRoles.customer);
  }
  
  async getManagers(): Promise<UserEntity[]> {
    return this.userRepository.fetchByRole(userRoles.manager);
  }

  async getAdmins(): Promise<UserEntity[]> {
    return this.userRepository.fetchByRole(userRoles.admin);
  }

  async getCouriers(): Promise<UserEntity[]> {
    return this.userRepository.fetchByRole(userRoles.courier);
  }

  async editUser(user: UserEntity): Promise<UserEntity> {
    const userExists = await this.userRepository.fetchById(user.id);

    if (!userExists) {
      throw new Error("User not found");
    }

    return this.userRepository.update(userExists);
  }

  async getUserById(id: number): Promise<UserEntity | undefined> {
    return this.userRepository.fetchById(id);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

}
