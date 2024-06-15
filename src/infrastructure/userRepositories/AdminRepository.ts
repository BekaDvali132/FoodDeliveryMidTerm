import {IAdminRepository} from "../../interfaces";
import { DataSource } from "../Database";
import {AdminEntity} from "../../core/entities/userEntities/AdminEntity";

export class AdminRepository implements IAdminRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  save(user: AdminEntity): Promise<AdminEntity> {
    return this.dataSource.admins.save(user);
  }

  fetchById(id: number): Promise<AdminEntity | undefined> {
    return this.dataSource.admins.getById(id);
  }
}
