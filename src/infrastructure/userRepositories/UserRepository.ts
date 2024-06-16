import { UserEntity } from "../../core/entities/userEntities/UserEntity";
import { IUserRepository } from "../../interfaces/userInterfaces";
import { DataSource } from "../Database";

export class UserRepository implements IUserRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  save(user: UserEntity): Promise<UserEntity> {
    return this.dataSource.users.save(user);
  }

  fetchById(id: number): Promise<UserEntity | undefined> {
    return this.dataSource.users.getById(id);
  }

  fetchByEmail(email: string): Promise<UserEntity | undefined> {
    return this.dataSource.users.findOne((user) => user.email === email);
  }

  update(user: UserEntity): Promise<UserEntity> {
    return this.dataSource.users.update(user);
  }
}
