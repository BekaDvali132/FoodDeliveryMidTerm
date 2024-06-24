import { FacilityEntity } from "../../core/entities/facilityEntities/FacilityEntity";
import {ProductEntity} from "../../core/entities/facilityEntities/ProductEntity";
import {IProductRepository} from "../../interfaces/facilityInterfaces";

export class ProductService {

  constructor(
    private readonly productRepository: IProductRepository,
  ) {}
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
