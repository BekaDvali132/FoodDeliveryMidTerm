import { ProductEntity } from "../../core/entities/facilityEntities/ProductEntity";
import { Tag } from "../../core/entities/facilityEntities/Tag";
import { IAddProduct, IEditProduct, IFacilityRepository, IProductRepository, ITagRepository } from "../../interfaces/facilityInterfaces";

export class FacilityManagerService {
    constructor(
        private readonly facilityRepository: IFacilityRepository,
        private readonly tagRepository: ITagRepository,
        private readonly productRepository: IProductRepository,
    ) { }

    async addProduct({
        name, 
        price,
        tagIds, 
        facilityId,
        managerId
    }:IAddProduct): Promise<ProductEntity> {
        const facility = await this.facilityRepository.fetchById(facilityId);

        if (!facility) {
            throw new Error("Facility not found");
        }

        if (facility?.manager?.id !== managerId) {
            throw new Error("Manager does not have access to this facility");
        }

        const tags: Tag[] = await Promise.all(
            tagIds.map(tagId => this.tagRepository.fetchById(tagId))
        ) as Tag[];

        if (!tags.every(tag => tag)) {
            throw new Error("Tag not found");
        }

        const product = new ProductEntity({ name, price, owner: facility, tags });

        return this.productRepository.save(product);
    }

    async editProduct({
        id, 
        name, 
        price, 
        tagIds,
        managerId
    }: IEditProduct): Promise<ProductEntity> {
        const product = await this.productRepository.fetchById(id);

        if (!product) {
            throw new Error("Product not found");
        }

        if (product.owner?.manager?.id !== managerId) {
            throw new Error("Manager does not have access to this product");
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
}