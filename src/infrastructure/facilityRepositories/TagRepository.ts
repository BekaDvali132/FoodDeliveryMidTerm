import {ITagRepository} from "../../interfaces/facilityInterfaces";
import {Tag} from "../../core/entities/facilityEntities/Tag";
import {DataSource} from "../Database";

export class TagRepository implements ITagRepository {
  constructor(
    private readonly dataSource: DataSource,
  ) {
  }

  async save(tag: Tag): Promise<Tag> {
    const tagNameExists = await this.dataSource.tags.findOne(
      (item) => item.name === tag.name
    );

    if (tagNameExists) {
      throw new Error("Tag name already exists");
    }

    return this.dataSource.tags.save(tag);
  }

  fetchById(id: number): Promise<Tag | undefined> {
    return this.dataSource.tags.getById(id);
  }

  async update(tag: Tag): Promise<Tag> {
    return this.dataSource.tags.update(tag);
  }

  async delete(id: number): Promise<void> {
    return this.dataSource.tags.delete(id);
  }

  async fetchAll(): Promise<Tag[]> {
    return this.dataSource.tags.find();
  }
}
