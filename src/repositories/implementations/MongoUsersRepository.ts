import mongoose from "mongoose";
import { UserInterfaceRepo } from "../UserInterfaceRepo";
import { User } from "../../entities/User";

require("../../services/UserSchema/UserSchema");

const UserSchema = mongoose.model("User");

export class MongoUsersRepository implements UserInterfaceRepo {
  async find(id?: string) {
    const users = await UserSchema.find();

    return !id ? users : users.find(({ _id }) => id === _id);
  }

  async save(user: User) {
    await new UserSchema(user)
      .save()
        .then(() =>  { return true  })
        .catch(() => { return false })
  }
}
