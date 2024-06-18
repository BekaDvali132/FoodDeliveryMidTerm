import {UserEntity, userRoles} from "../../core/entities/userEntities/UserEntity";
import {IUserRepository} from "../../interfaces/userInterfaces";

export class RegisterService {

  constructor(
    private readonly userRepository: IUserRepository,
  ) {
  }

  async register({
                   email,
                   password,
                   firstName,
                   lastName,
                   role
                 }:{
    email: string,
    password: string,
    firstName: string,
    lastName: string
    role: userRoles
  }): Promise<UserEntity> {

    let user = await this.userRepository.fetchByEmail(email);

    if (!user) {
      user = new UserEntity({email, password, firstName, lastName, roles: []})
    }

    if (!user.roles.find(r => r === role)) {
      user.roles.push(role)
    }

    return this.userRepository.save(user);
  }
}
