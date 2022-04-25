interface UserRegistered {
  _id: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export {
  UserRegistered,
}