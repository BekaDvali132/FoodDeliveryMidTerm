import { FacilityEntity } from './FacilityEntity';
import { Tag } from './Tag';

export class ProductEntity {
  constructor(
      public id: number,
      public name: string,
      public price: number,
      public owner: FacilityEntity,
      public tags: Tag[]
  ) {}
}
