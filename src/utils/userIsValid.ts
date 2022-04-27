import { UserStarting } from '../interfaces';

export const userIsValid = ({ email, password }: UserStarting): Error | boolean => {
  const REGEX = /\S+@\S+\.\S+/;
  const errors = [];

  if (password.length < 4) errors.push("Password is very small");

  if (!REGEX.test(email)) errors.push("Email is invalid");

  if (errors.length > 0)
    return new Error(errors.join(','));

  return true;
}