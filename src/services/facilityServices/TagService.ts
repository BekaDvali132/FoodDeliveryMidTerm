import {Tag} from "../../core/entities/facilityEntities/Tag";
import {TagRepository} from "../../infrastructure/facilityRepositories/TagRepository";

export class TagService {

  constructor(
    private readonly tagRepository: TagRepository,
  ) {}

  async addTag(name: string): Promise<Tag> {
    const newTag = new Tag({name});
    return this.tagRepository.save(newTag);
  }

}
