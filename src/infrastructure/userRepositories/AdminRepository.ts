import {IAdminRepository} from "../../interfaces";
import {DataSource} from "../Database";
import {AdminEntity} from "../../core/entities/userEntities/AdminEntity";

export class AdminRepository implements IAdminRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) {
  }

  async save(userId: number, user: AdminEntity): Promise<AdminEntity> {
    const coreUser = await this.dataSource.users.getById(userId);

    if (!coreUser) {
      throw new Error('User not found');
    }

    const admin = await this.dataSource.admins.save(user);

    await this.dataSource.users.update({
      ...coreUser,
      admin
    })

    return admin;
  }

  fetchById(id: number): Promise<AdminEntity | undefined> {
    return this.dataSource.admins.getById(id);
  }
}
