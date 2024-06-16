import {ProductRepository} from "../../infrastructure/facilityRepositories/ProductRepository";
import {ProductEntity} from "../../core/entities/facilityEntities/ProductEntity";
import {TagRepository} from "../../infrastructure/facilityRepositories/TagRepository";
import {FacilityRepository} from "../../infrastructure/facilityRepositories/FacilityRepository";
import {Tag} from "../../core/entities/facilityEntities/Tag";

export class ProductService {

  constructor(
    private readonly productRepository: ProductRepository,
    private readonly tagRepository: TagRepository,
    private readonly facilityRepository: FacilityRepository,
  ) {}

  async addProduct(name: string, price:number, ownerId: number, tagIds: number[]): Promise<ProductEntity> {
    const tags: Tag[] = await Promise.all(
      tagIds.map(tagId => this.tagRepository.fetchById(tagId))
    ) as Tag[];

    const owner = await this.facilityRepository.fetchById(ownerId);

    if (!tags.every(tag => tag)) {
      throw new Error("Tag not found");
    }

    const product = new ProductEntity({ name, price, owner, tags });

    return this.productRepository.save(product);
  }

}
