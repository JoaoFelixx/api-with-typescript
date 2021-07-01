import { User } from "../../entities/User";

export interface ValidatorInterface {
  userValidate(user: User): boolean
}