interface UserRegistered {
  _id: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type UserStarting = Omit<UserRegistered, '_id' | 'createdAt' | 'updatedAt'>

export {
  UserRegistered,
  UserStarting,
}