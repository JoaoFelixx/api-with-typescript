import { User } from "../entities/User";

export interface UserInterfaceRepository {
  find(id?: string): Promise<void>
  save(user: User): Promise<void>
  delete(id: string): Promise<void>
  update(id:string, user: User): Promise<void>
}  