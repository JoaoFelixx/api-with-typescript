export async function userIsValid(email: string, password: string): Promise<boolean> {

  return new Promise((resolve, reject) => {
    
    const REGEX = /\S+@\S+\.\S+/;
    let error = [];

    if ( password.length < 4) error.push("Password is very small");

    if (!REGEX.test(email))   error.push("Email is invalid");

    error.length > 0 ? reject(error) : resolve(true);
  });
};