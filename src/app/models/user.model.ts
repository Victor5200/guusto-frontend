
export class User {
  constructor(id?: string, name?: string, password?: string) {
    this.id = id;
    this.name = name;
    this.password = password;
  }

  public id: string;
  public name: string;
  public password: string;

}
