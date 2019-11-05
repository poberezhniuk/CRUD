export class User {
  constructor(
    public id: number,
    public userName: string,
    public name: string,
    public surname: string,
    public email: string,
    public role: string,
    public registrationDate: string,
    public enabled: boolean
  ) {}
}
