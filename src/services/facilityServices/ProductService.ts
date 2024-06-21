import { FacilityEntity } from "../../core/entities/facilityEntities/FacilityEntity";
import {ProductEntity} from "../../core/entities/facilityEntities/ProductEntity";
import {Tag} from "../../core/entities/facilityEntities/Tag";
import {IFacilityRepository, IProductRepository, ITagRepository} from "../../interfaces/facilityInterfaces";

export class ProductService {

  constructor(
    private readonly productRepository: IProductRepository,
    private readonly tagRepository: ITagRepository,
    private readonly facilityRepository: IFacilityRepository,
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

  async editProduct(id: number, name: string, price: number, tagIds: number[]): Promise<ProductEntity> {
    const product = await this.productRepository.fetchById(id);

    if (!product) {
      throw new Error("Product not found");
    }

    const tags: Tag[] = await Promise.all(
      tagIds.map(tagId => this.tagRepository.fetchById(tagId))
    ) as Tag[];

    if (!tags.every(tag => tag)) {
      throw new Error("Tag not found");
    }

    product.name = name;
    product.price = price;
    product.tags = tags;

    return this.productRepository.save(product);
  }

  async fetchProductsByName(name: string): Promise<ProductEntity[]> {
    return this.productRepository.fetchAllByName(name);
  }

  async fetchProductById(id: number): Promise<ProductEntity | undefined> {
    return this.productRepository.fetchById(id);
  }

  async fetchFacilityProducts (facility: FacilityEntity): Promise<ProductEntity[]> {
    return this.productRepository.fetchByFacility(facility.id);
  }

}
