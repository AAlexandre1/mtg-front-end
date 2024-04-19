export class Type {
  id: number;
  name: string;

  constructor(type:any) {
    this.id = type.id;
    this.name = type.name;
  }
}
