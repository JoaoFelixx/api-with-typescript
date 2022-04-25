import { createHmac } from 'crypto';
import SECRET_KEY from '../auth/SECRET_KEY';

const createHash = (password: string): string => createHmac('md5', SECRET_KEY)
  .update(password).digest('hex');

export default createHash;