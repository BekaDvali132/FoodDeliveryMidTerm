import { FacilityEntity } from './FacilityEntity';
import { Tag } from './Tag';

export class ProductEntity {
  readonly id: number;
  public name: string;
  public price: number;
  public owner: FacilityEntity;
  public tags: Tag[];

  constructor(
      id: number,
      name: string,
      price: number,
      owner: FacilityEntity,
      tags: Tag[]
  ) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.owner = owner
      this.tags = tags
  }
  
}
