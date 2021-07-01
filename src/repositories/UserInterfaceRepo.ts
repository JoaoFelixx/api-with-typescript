import { User } from "../entities/User";

export interface UserInterfaceRepo {
  find(id?: string)
  save(user: User)
}  