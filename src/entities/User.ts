export interface UserCreate {
  _id: string;
  email: string;
  password: string;
}

export interface UserUpdate {
  email: string;
  password: string;
}