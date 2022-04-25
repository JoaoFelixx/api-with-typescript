import { randomUUID as uuid } from 'crypto';
import { createHash } from '../utils';

class User {
  constructor(
    public _id: string,
    public email: string,
    public password: string,
    public createdAt?: Date,
  ) {
    this._id = this._id ? this._id : uuid();
    this.email.toLowerCase();
    this.password = createHash(password);
    this.createdAt = this.createdAt ? this.createdAt : new Date();
  }

  userIsValid(): Error | boolean {
    const REGEX = /\S+@\S+\.\S+/;
    const errors = [];

    if (this.password.length < 4) errors.push("Password is very small");

    if (!REGEX.test(this.email)) errors.push("Email is invalid");

    if (errors.length > 0)
      return new Error(errors.toString());

    return true
  }
}

export default User;