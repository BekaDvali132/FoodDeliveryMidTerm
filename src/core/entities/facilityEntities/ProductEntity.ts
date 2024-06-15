import { FacilityEntity } from './FacilityEntity';
import { Tag } from './Tag';

export class ProductEntity {
  public id: number = 0;
  public name: string = '';
  public price: number = 0;
  
  public owner?: FacilityEntity;
  public tags?: Tag[];

  constructor(rawData?: Partial<ProductEntity>) {
    if (rawData?.owner) {
      this.owner = new FacilityEntity(rawData.owner);
      delete rawData.owner;
    }

    if (rawData?.tags) {
      this.tags = rawData.tags.map(tag => new Tag(tag))
      delete rawData.tags;
    }

    Object.assign(this, rawData);
  }
}