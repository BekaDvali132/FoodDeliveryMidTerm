export class Tag {
  public id?: number;
  public name?: string;

  constructor(rawData?: Partial<Tag>) {
    Object.assign(this, rawData)
  }
}