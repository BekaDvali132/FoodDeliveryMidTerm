import { UserEntity } from "../core/entities/userEntities/UserEntity";


export interface IUserRepository {
  save(user: UserEntity): Promise<UserEntity>;
  fetchById(id: number): Promise<UserEntity | undefined>;
  fetchByEmail(email: string): Promise<UserEntity | undefined>;
  update(user: UserEntity): Promise<UserEntity>;
  fetchByRole(role: string): Promise<UserEntity[]>;
  delete(id: number): Promise<void>;
}
