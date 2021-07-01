import { ValidatorInterface } from "./ValidatorInterface";
import { User } from "../../entities/User";

class Validator implements ValidatorInterface {
  
  userValidate(user: User): boolean {
    const REGEX = /\S+@\S+\.\S+/;
    const { email, name, password } = user;
    let error = [];

    if (!email || !name || !password) return false;

    if (email.length < 7 || name.length < 2 || password.length < 4) error.push(1);

    if (!REGEX.test(email)) error.push(2);
    
    return error.length > 0 ? false : true;
  }
}

export default new Validator()