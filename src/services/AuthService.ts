import { UserEntity } from "../core/entities/userEntities/UserEntity";
import { IUserRepository } from "../interfaces/userInterfaces";

export class LoginFailedException extends Error {
  constructor() {
    super("Login failed");
  }
}

export class AuthService {

  constructor(
    private readonly userRepository: IUserRepository,
  ) { }

  async login(email: string, password: string): Promise<UserEntity> {
    const user = await this.userRepository.fetchByEmail(email);

    if (!user) throw new LoginFailedException();
    if (user.password !== password) throw new LoginFailedException();
    return user;
  }
}
