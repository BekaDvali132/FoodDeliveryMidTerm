import {Tag} from "../../core/entities/facilityEntities/Tag";
import {IProductRepository, ITagRepository} from "../../interfaces/facilityInterfaces";

export class TagService {

  constructor(
    private readonly tagRepository: ITagRepository,
    private readonly productRepository: IProductRepository,
  ) {}

  async getTags(): Promise<Tag[]> {
    return this.tagRepository.fetchAll();
  }

  async addTag(name: string): Promise<Tag> {
    const newTag = new Tag({name});
    return this.tagRepository.save(newTag);
  }

  async editTag(id: number, name: string): Promise<Tag> {
    const tag = await this.tagRepository.fetchById(id) as Tag;

    if (!tag) {
      throw new Error("Tag not found");
    }

    tag.name = name;

    return this.tagRepository.save(tag);
  }

  async deleteTag(id: number): Promise<void> {
    const tagProducts = await this.productRepository.fetchByTag(id);

    if (tagProducts.length) {
      throw new Error("Tag is in use");
    }

    return this.tagRepository.delete(id);
  }
}
