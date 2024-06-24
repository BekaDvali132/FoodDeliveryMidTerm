import { UserEntity, userRoles } from "../../core/entities/userEntities/UserEntity";
import { IUserRepository } from "../../interfaces/userInterfaces";
const readline = require('readline');

export class RegisterService {

  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  async register({
    email,
    password,
    firstName,
    lastName,
    role
  }: {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role: userRoles
  }): Promise<UserEntity> {

    let user = await this.userRepository.fetchByEmail(email);

    if (!user) {
      user = new UserEntity({ email, password, firstName, lastName, roles: [role] }) // Initialize roles with the provided role
    } else {
      if (!user.roles.find(r => r === role) && password === user.password) {
        user.roles.push(role)
      }
    }

    return this.userRepository.save(user);
  }

  async getUserInputAndRegister(): Promise<UserEntity> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    const question = (query: string): Promise<string> => {
      return new Promise(resolve => rl.question(query, resolve));
    };
    try {
      const email = await question("Enter your email: ");
      const password = await question("Enter your password: ");
      const firstName = await question("Enter your first name: ");
      const lastName = await question("Enter your last name: ");
      const roleInput = await question("Enter your role: ");

      let role: userRoles;
      switch (roleInput) {
        case 'admin':
        case 'moderator':
        case 'user':
          role = roleInput as userRoles;
          break;
        default:
          throw new Error(`Invalid role: ${roleInput}`);
      }
      return this.register({ email, password, firstName, lastName, role });
    } catch (error) {
      console.error("Registration failed:", error);
      throw error; // rethrow the error
    } finally {
      rl.close();
    }
  }
}