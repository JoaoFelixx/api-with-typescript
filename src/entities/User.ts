import { randomUUID as uuid } from 'crypto';
import bcrypt from 'bcryptjs';

export class User {
  public readonly _id: string;

  public email: string;
  public password: string;
  public createdAt?: Date;

  constructor(props: Omit<User, '_id'>, _id?: string) {
    Object.assign(this, props);

    this.email.toLowerCase();
    this.password = bcrypt.hashSync(props.password, 8);
    this.createdAt = this.createdAt ? this.createdAt : new Date();

    if (!this._id) {
      this._id = uuid()
    }
  }
}