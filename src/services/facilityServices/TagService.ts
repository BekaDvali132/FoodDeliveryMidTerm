import {Tag} from "../../core/entities/facilityEntities/Tag";
import {ITagRepository} from "../../interfaces/facilityInterfaces";

export class TagService {

  constructor(
    private readonly tagRepository: ITagRepository,
  ) {}

  async addTag(name: string): Promise<Tag> {
    const newTag = new Tag({name});
    return this.tagRepository.save(newTag);
  }

}
