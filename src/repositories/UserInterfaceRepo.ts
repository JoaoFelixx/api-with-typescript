import { User } from "../entities/User";

export interface UserCreateInterfaceRepository {
  find(id?: string)
  save(user: User)
}  

export interface UserDeleteInterfaceRepository {
  delete(id: string, password: string): Promise<void>
}