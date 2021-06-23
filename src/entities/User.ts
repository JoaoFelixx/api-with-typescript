import { uuid } from 'uuidv4'

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;
  
  constructor (props: Omit<User,'id'>, id?: string ) {
    Object.assign(this, props)

    !id ? this.id = uuid() : true
  }
}